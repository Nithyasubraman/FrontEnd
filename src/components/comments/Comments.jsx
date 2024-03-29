import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Cookies from 'js-cookie';
import './comments.css';

const Comments = () => {
  const [blogs, setBlogs] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  
  useEffect(() => {
    axios.get('http://localhost:5122/api/BlogPosts')
      .then(res => {
        setBlogs(res.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const handleLike = (postId) => {
    const likedStatus = Cookies.get(`liked_${postId}`);
    const likesCount = Cookies.get(`likes_${postId}`);

    const isLiked = likedStatus === 'true';
    const likes = parseInt(likesCount) || 0;

    const newLikeStatus = !isLiked;
    Cookies.set(`liked_${postId}`, newLikeStatus);

    const newLikesCount = newLikeStatus ? likes + 1 : likes - 1;
    Cookies.set(`likes_${postId}`, newLikesCount);

    axios.post(`http://localhost:5122/api/BlogPosts/${postId}/like`)
      .catch(error => {
        console.error('Error toggling like:', error);
      });

    // Update the state to reflect the change
    setBlogs(prevBlogs => {
      return prevBlogs.map(blog => {
        if (blog.id === postId) {
          return { ...blog, isLiked: newLikeStatus, likes: newLikesCount };
        }
        return blog;
      });
    });
  };

  const handleComment = (postId) => {
    // Get the current comments from cookies
    const comments = Cookies.get(`comments_${postId}`) || '[]';
    const parsedComments = JSON.parse(comments);

    // Add the new comment to the array
    parsedComments.push(commentInput);

    // Save the updated comments back to cookies
    Cookies.set(`comments_${postId}`, JSON.stringify(parsedComments));

    // Clear the comment input field
    setCommentInput('');
  };

  return (
    <div>
      <div className="menus-container panel panel-default text-center">
        {blogs.map(blog => (
          <div key={blog.id} className="menu-item">
            <div className="panel-body" style={{ width: "450px", borderRadius: "12px" }} id='postImg'>
              <img src={blog.imageUrl} alt={blog.title} style={{width:"350px",height:"250px"}} />
            </div>
            <div className="panel-header">
              <h2>{blog.title}</h2>
            </div>
            <div className="panel-header">
              <p>{blog.content}</p>
            </div>
            <div className="panel-header">
              <p><b>Author : </b>{blog.author}</p>
            </div>
            <div className="panel-header">
              <p><b>Category : </b>{blog.category}</p>
            </div>
            <div className="panel-header">
              <p>{blog.tag}</p>
            </div>
            <div className="panel-header">
              <p>{blog.postedDate}</p>
            </div>
            <br/>
            {/* <div className="panel-header">
              <p>{blog.likes}</p>
              <button onClick={() => handleLike(blog.id)} style={{ border: "none" }}>
                {blog.isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
              </button>
              <span>Likes</span>
            </div> */}
            <div className="panel-footer">
              <input type="text" value={commentInput} onChange={(e) => setCommentInput(e.target.value)} placeholder="Add a comment" />
              <br/>
              <br/>
              <button onClick={() => handleComment(blog.id)}>Comment</button>
              {/* Display comments */}
              <ul style={{listStyle:"none"}}>
                {JSON.parse(Cookies.get(`comments_${blog.id}`) || '[]').map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            </div>
            <div className="panel-header" style={{marginLeft:"-350px"}}>
              <p>{blog.likes}</p>
              <button onClick={() => handleLike(blog.id)} style={{ border: "none" }}>
                {blog.isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
              </button>
              <span>Likes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
