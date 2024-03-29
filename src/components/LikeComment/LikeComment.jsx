import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// import './comments.css';

const LikeComment = () => {
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

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem('likes')) || {};
    const updatedBlogs = blogs.map(blog => ({
      ...blog,
      isLiked: savedLikes[blog.id] ? true : false,
      likes: savedLikes[blog.id] || blog.likes
    }));
    setBlogs(updatedBlogs);
  }, [blogs]);

  const handleLike = (postId) => {
    setBlogs(prevBlogs => {
      const updatedBlogs = prevBlogs.map(blog => {
        if (blog.id === postId) {
          const isLiked = !blog.isLiked;
          const likes = isLiked ? blog.likes + 1 : blog.likes - 1;

          const savedLikes = JSON.parse(localStorage.getItem('likes')) || {};
          savedLikes[postId] = isLiked ? likes : 0;
          localStorage.setItem('likes', JSON.stringify(savedLikes));

          return { ...blog, isLiked: isLiked, likes: likes };
        }
        return blog;
      });
      return updatedBlogs;
    });

    axios.post(`http://localhost:5122/api/BlogPosts/${postId}/like`)
      .catch(error => {
        console.error('Error toggling like:', error);
      });
  };

  const handleComment = (postId) => {
    const comments = JSON.parse(localStorage.getItem(`comments_${postId}`)) || [];
    comments.push(commentInput);
    localStorage.setItem(`comments_${postId}`, JSON.stringify(comments));
    setCommentInput('');
  };

  return (
    <div>
      <div className="menus-container panel panel-default text-center">
        {blogs.map(blog => (
          <div key={blog.id} className="menu-item">
            <div className="panel-body" style={{ width: "450px", borderRadius: "12px" }} id='postImg'>
              <img src={blog.imageUrl} alt={blog.title} style={{ width: "350px", height: "250px" }} />
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
            <br />
            <div className="panel-header">
              <p>{blog.likes}</p>
              <button onClick={() => handleLike(blog.id)} style={{ border: "none" }}>
                {blog.isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
              </button>
              <span>Likes</span>
            </div>
            <div className="panel-footer">
              <input type="text" value={commentInput} onChange={(e) => setCommentInput(e.target.value)} placeholder="Add a comment" />
              <br />
              <br />
              <button onClick={() => handleComment(blog.id)}>Comment</button>
              <br/>
              <ul style={{ listStyle: "none" }}>
                {JSON.parse(localStorage.getItem(`comments_${blog.id}`) || '[]').map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikeComment;
