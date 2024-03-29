import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Cookies from 'js-cookie';
import './cmnt.css';

const Cmnt = () => {
    const userid = Cookies.get('userid')
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState({});

  useEffect(() => {

    axios.get('http://localhost:5122/api/BlogPosts')
      .then(res => {
        setBlogs(res.data);
        console.log(res.data)
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const fetchComments = async (blogId) => {
    console.log("Blog Id",blogId);
    try {
      const response = await axios.get(`http://localhost:5122/api/Search/GetComments/${blogId}`);
      setComments(prevState => ({
        ...prevState,
        [blogId]: response.data
      }));
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleCommentSubmit = async (blogId, userId, comment) => {
    console.log("blog",blogId)
    console.log("user",userId)
    console.log("cmnt",comment)


    try {
      await axios.post('http://localhost:5122/api/Search', {
        Blogid: blogId,
        UserId: userId,
        Comment: comment
      });
      // After submitting comment, refetch comments for the post
      fetchComments(blogId);
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const handleLike = async (postId) => {
    try {
      await axios.post(`http://localhost:5122/api/BlogPosts/like/${postId}`);
      // Update the state to reflect the change in likes count
      setBlogs(prevBlogs => {
        return prevBlogs.map(blog => {
          if (blog.id === postId) {
            return { ...blog, likes: blog.likes + 1 };
          }
          return blog;
        });
      });
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const handleUnlike = async (postId) => {
    try {
      await axios.post(`http://localhost:5122/api/BlogPosts/unlike/${postId}`);
      // Update the state to reflect the change in likes count
      setBlogs(prevBlogs => {
        return prevBlogs.map(blog => {
          if (blog.id === postId && blog.likes > 0) {
            return { ...blog, likes: blog.likes - 1 };
          }
          return blog;
        });
      });
    } catch (error) {
      console.error('Error toggling unlike:', error);
    }
  };

  return (
    <div className="posts">
      {blogs.map(post => (
        <div className="menu-item" key={post.id}>
          <div className="post">
            <div className="panel-body" style={{ width: "350px", borderRadius: "12px" }} id='postImg'>
              <img src={post.imageUrl} alt={post.title} style={{width:"350px",height:"250px"}} />
            </div>
            <div className="panel-header">
              <h2>{post.title}</h2>
            </div>
            <div className="panel-header">
              <p>{post.content}</p>
            </div>
            <div className="panel-header">
              <p><b>Author : </b>{post.author}</p>
            </div>
            <div className="panel-header">
              <p><b>Category : </b>{post.category}</p>
            </div>
            <div className="panel-header">
              <p>{post.tag}</p>
            </div>
            <div className="panel-header">
              <p>{post.postedDate}</p>
            </div>
            <br/>
            <div className='likefunction'>
              <button onClick={() => handleLike(post.id)}>
                <AiFillHeart />
                Like
              </button>
              &nbsp;
              <span>{post.likes} Likes </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => handleUnlike(post.id)}>
                <AiOutlineHeart />
                DisLike
              </button>
            </div>
            <br/>
            <div>
              <h3>Comments</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const comment = formData.get('comment');
                  // handleCommentSubmit(post.id, /* Add user id */, comment);
                  handleCommentSubmit(post.id,userid,comment);
                  e.target.reset();
                }}
              >
                <input type="text" name="comment" placeholder="Add a comment" required />
                <button type="submit">Post</button>
              </form>
              <br/>
              {post.comments.map((comment, index) => (
                <div key={index} className='d-flex justify-content-between'>
                  <div style={{fontWeight:"bolder"}}>{comment.userSignup.name}
                  </div>
                  <div>{comment.commentContent}</div>
                  {/* Add username or other relevant information */}
                  {/* <p>{comment.userName}</p> Assuming userName is present in comment data */}
                </div>
              ))}
              
            </div>
            <br/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cmnt;

































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// // import Cookies from 'js-cookie';
// // import Post from '../post/Post';

// const Cmnt = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5122/api/BlogPosts')
//       .then(res => {
//         setBlogs(res.data);
//       })
//       .catch(error => {
//         console.error('Error fetching posts:', error);
//       });
//   }, []);

//   const [comments, setComments] = useState({});

//   const fetchComments = async (blogId) => {
//     try {
//       const response = await axios.get(`http://localhost:5122/api/Search/GetComments/${blogId}`);
//       setComments(prevState => ({
//         ...prevState,
//         [blogId]: response.data
//       }));
//     } catch (error) {
//       console.error('Error fetching comments:', error);
//     }
//   };

//   const handleCommentSubmit = async (blogId, userId, comment) => {
//     try {
//       await axios.post('http://localhost:5122/api/Search', {
//         Blogid: blogId,
//         UserId: userId,
//         Comment: comment
//       });
//       // After submitting comment, refetch comments for the post
//       fetchComments(blogId);
//     } catch (error) {
//       console.error('Error submitting comment:', error);
//     }
//   };

//   const handleLike = async (postId) => {
//     try {
//       await axios.post(`http://localhost:5122/api/BlogPosts/like/${postId}`);
//       // Update the state to reflect the change in likes count
//       setBlogs(prevBlogs => {
//         return prevBlogs.map(blog => {
//           if (blog.id === postId) {
//             return { ...blog, likes: blog.likes + 1 };
//           }
//           return blog;
//         });
//       });
//     } catch (error) {
//       console.error('Error toggling like:', error);
//     }
//   };

//   const handleUnlike = async (postId) => {
//     try {
//       await axios.post(`http://localhost:5122/api/BlogPosts/unlike/${postId}`);
//       // Update the state to reflect the change in likes count
//       setBlogs(prevBlogs => {
//         return prevBlogs.map(blog => {
//           if (blog.id === postId && blog.likes > 0) {
//             return { ...blog, likes: blog.likes - 1 };
//           }
//           return blog;
//         });
//       });
//     } catch (error) {
//       console.error('Error toggling unlike:', error);
//     }
//   };

//   return (
//     <div className="posts">
//       {blogs.map(post => (
//         <div className="menu-item" key={post.id}>
//           <div className="post">
//             {/* Existing post content */}
//             <div className="panel-body" style={{ width: "450px", borderRadius: "12px" }} id='postImg'>
//               <img src={post.imageUrl} alt={post.title} style={{width:"350px",height:"250px"}} />
//             </div>
//             <div className="panel-header">
//               <h2>{post.title}</h2>
//             </div>
//             <div className="panel-header">
//               <p>{post.content}</p>
//             </div>
//             <div className="panel-header">
//               <p><b>Author : </b>{post.author}</p>
//             </div>
//             <div className="panel-header">
//               <p><b>Category : </b>{post.category}</p>
//             </div>
//             <div className="panel-header">
//               <p>{post.tag}</p>
//             </div>
//             <div className="panel-header">
//               <p>{post.postedDate}</p>
//             </div>
//             <div>
//               <button onClick={() => handleLike(post.id)}>
//                 <AiFillHeart />
//               </button>
//               <span>{post.likes}</span>
//               <button onClick={() => handleUnlike(post.id)}>
//                 <AiOutlineHeart />
//               </button>
//             </div>
//             {/* Add comments section */}
//             <div>
//               <h3>Comments</h3>
//               {comments[post.id] && comments[post.id].map((comment, index) => (
//                 <div key={index}>
//                   <p>{comment.Comment}</p>
//                   {/* Add username or other relevant information */}
//                 </div>
//               ))}
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   const formData = new FormData(e.target);
//                   const comment = formData.get('comment');
//                 //   handleCommentSubmit(post.id, /* Add user id */, comment);
//                   handleCommentSubmit(post.id, /* Add user id */ comment);
//                   e.target.reset();
//                 }}
//               >
//                 <input type="text" name="comment" placeholder="Add a comment" required />
//                 <button type="submit">Submit</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cmnt;
