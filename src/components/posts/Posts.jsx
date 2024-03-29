import React from 'react'
import './posts.css'
// import Post from '../../components/post/Post'
import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Cookies from 'js-cookie';


const Posts = () => {
    const [blogs, setBlogs] = useState([]);

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


    // function Posts() {
    //     const [blogs, setblogs] = useState([]);
    //     console.log(blogs);
    //     useEffect(() => {
    //         axios.get('http://localhost:5122/api/BlogPosts')

    //             .then(res => setblogs(res.data))
    //             .catch(err => console.log(err));

    //     }, []);

    // const handleDelete = (id) => {
    //     const confirmDelete = window.confirm("Would you like to delete?");
    //     if (confirmDelete) {
    //         axios.delete(`https://localhost:7092/api/blogs_Details/${id}`)
    //             .then(res => {
    //                 setblogs(blogs.filter(blogs => blogs.blogs_Id !== id));
    //             })
    //             .catch(err => console.log(err));
    //     }
    // };

    return (
        <>
            {/* <h1>List of Menus</h1> */}
            {/* <div className="d-flex flex-column  align-items-center backgroundcolorset vh-100"> */}
            <div>
                {/* <div className="w-100 rounded bg-dark border shadow p-4"> */}
                <div>
                    {/* <div className="d-flex justify-content-end">
                        <Link to="/menu" className="btn btn-sm btn-success">Add +</Link>
                    </div> */}
                    {/* <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Menu ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Menu Image</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs.map((blogs, index) => (
                                    <tr key={index}>
                                        <td>{blogs.menuID}</td>
                                        <td>{blogs.name}</td>
                                        <td>{blogs.price}</td>
                                        <td>{blogs.menuImage}</td>
                                       
                                       
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    */}

                </div>

                <div className="menus-container panel panel-default text-center">
                    {/* <Post />
                    <Post /> */}
                    {blogs.map((blogs) => (
                        <div key={blogs.menuID} className="menu-item">
                            <div className="panel-header">
                                <h2>{blogs.name}</h2>
                            </div>
                            <div className="panel-body" style={{ width: "450px", borderRadius: "12px" }} id='postImg'>
                                <img src={blogs.imageUrl} alt='postPic' />
                            </div>
                            <br />
                            <div className="panel-header">
                                <h2>{blogs.title}</h2>
                            </div>
                            <br />
                            <br />
                            <div className="panel-header">
                                <p>{blogs.content}</p>
                            </div>
                            <br />
                            {/* <div className="panel-header">
                            <h2>{blogs.author}</h2>
                        </div> */}
                            <div className="panel-header">
                                <p>{blogs.postedDate}</p>
                            </div>
                            <br />
                            {/* <div className="panel-header">
                            <h2>{blogs.tag}</h2>
                        </div> */}
                            <div className="panel-header">
                                <p>{blogs.category}</p>
                            </div>
                            <br/>
                            <div className='likefunction'>
                            <div className="panel-header">
                                <p>{blogs.likes}</p>
                            </div>
                            <button onClick={() => handleLike(blogs.id)} style={{border:"none"}}>
                                {blogs.isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
                            </button>
                            &nbsp;
                            <span>Likes</span>
                                </div>
                            <div className="panel-footer">

                                {/* <p>Price: {blogs.price}</p> */}
                                {/* <button className="btn btn-lg" type="button">View Details</button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Posts;




















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Post from '../../components/post/Post';
// import { Link } from "react-router-dom";

// function Posts() {
//     const [blogs, setBlogs] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5122/api/BlogPosts')
//             .then(res => setBlogs(res.data))
//             .catch(err => console.log(err));
//     }, []);

//     const deletePost = async (id) => {
//         try {
//             await axios.delete(`http://localhost:5122/api/Admin/blogposts/${id}`);
//             setBlogs(blogs.filter(blog => blog.menuID !== id));
//         } catch (error) {
//             console.error('Error deleting post:', error);
//         }
//     };

//     return (
//         <>
//             <div className="menus-container panel panel-default text-center">
//                 {blogs.map(blog => (
//                     <div key={blog.menuID} className="menu-item">
//                         <div className="panel-header">
//                             <h2>{blog.name}</h2>
//                         </div>
//                         <div className="panel-body" style={{ width: "450px" }}>
//                             <img src={blog.imageUrl} alt={blog.name} />
//                         </div>
//                         <br />
//                         <div className="panel-header">
//                             <h2>{blog.title}</h2>
//                         </div>
//                         <br />
//                         <br />
//                         <div className="panel-header">
//                             <h2>{blog.content}</h2>
//                         </div>
//                         <br />
//                         <div className="panel-header">
//                             <h2>{blog.postedDate}</h2>
//                         </div>
//                         <br />
//                         <div className="panel-header">
//                             <h2>{blog.category}</h2>
//                         </div>
//                         <div className="panel-footer">
//                             <button onClick={() => deletePost(blog.menuID)}>Delete</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }

// export default Posts;















// return (
//   <div className='posts'>
//       {/* <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/> */}
//   </div>
// )