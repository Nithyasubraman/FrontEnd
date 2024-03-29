import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Cookies from 'js-cookie';
// import './cmnt.css';

const CommentsManagement = ({ isAdmin }) => {
    const userid = Cookies.get('userid');
    const [blogs, setBlogs] = useState([]);
    const [comments, setComments] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5122/api/BlogPosts')
            .then(res => {
                setBlogs(res.data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    const fetchComments = async (blogId) => {
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

    const handleDeleteComment = async (blogId, commentId) => {
        try {
            await axios.delete(`http://localhost:5122/api/Admin/comments/${commentId}`);
            // After deleting comment, refetch comments for the post
            fetchComments(blogId);
        } catch (error) {
            console.error('Error deleting comment:', error);
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

    const handleDeleteBlog = async (blogId) => {
        try {
            await axios.delete(`http://localhost:5122/api/BlogPosts/${blogId}`);
            // After deleting blog post, refetch blog posts
            const response = await axios.get('http://localhost:5122/api/BlogPosts');
            setBlogs(response.data);
        } catch (error) {
            console.error('Error deleting blog post:', error);
        }
    };

    return (
        <div className="posts">
            {blogs.map(post => (
                <div className="menu-item" key={post.id}>
                    <div className="post">
                        <div className="panel-body" style={{ width: "350px", borderRadius: "12px" }} id='postImg'>
                            <img src={post.imageUrl} alt={post.title} style={{ width: "350px", height: "250px" }} />
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
                        <br />
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
                            {isAdmin && (
                                <button onClick={() => handleDeleteBlog(post.id)}>
                                    Delete Post
                                </button>
                            )}
                        </div>
                        <br />
                        <div>
                            <h3>Comments</h3>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.target);
                                    const comment = formData.get('comment');
                                    handleCommentSubmit(post.id, userid, comment);
                                    e.target.reset();
                                }}
                            >
                                <input type="text" name="comment" placeholder="Add a comment" required />
                                <button type="submit">Post</button>
                            </form>
                            <br />
                            {comments[post.id] && comments[post.id].map((comment, index) => (
                                <div key={index} className='d-flex justify-content-between'>
                                    <div style={{ fontWeight: "bolder" }}>{comment.userSignup.name}</div>
                                    <div>{comment.commentContent}</div>
                                    {/* Add delete comment option for admin */}
                                    {isAdmin && (
                                        <button onClick={() => handleDeleteComment(post.id, comment.commentId)}>
                                            Delete
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                        <br />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentsManagement;
