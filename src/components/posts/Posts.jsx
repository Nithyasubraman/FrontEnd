import React from 'react'
import './posts.css'
import Post from '../../components/post/Post'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
  const [blogs, setblogs] = useState([]);
    console.log(blogs);
    useEffect(() => {
        axios.get('http://localhost:5122/api/BlogPosts')
           
            .then(res => setblogs(res.data))
            .catch(err => console.log(err));
         
    }, []);
 
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
                  <Post/>
                {blogs.map((blogs) => (
                    <div key={blogs.menuID} className="menu-item">
                        <div className="panel-header">
                            <h2>{blogs.name}</h2>
                        </div>
                        <div className="panel-body" style={{width:"450px"}}>
                            <img src={blogs.imageUrl}  />
                        </div>
                        <br/>
                        <div className="panel-header">
                            <h2>{blogs.title}</h2>
                        </div>
                        <br/>
                        <br/>
                        <div className="panel-header">
                            <h2>{blogs.content}</h2>
                        </div>
                        <br/>
                        {/* <div className="panel-header">
                            <h2>{blogs.author}</h2>
                        </div> */}
                        <div className="panel-header">
                            <h2>{blogs.postedDate}</h2>
                        </div>
                        <br/>
                        {/* <div className="panel-header">
                            <h2>{blogs.tag}</h2>
                        </div> */}
                        <div className="panel-header">
                            <h2>{blogs.category}</h2>
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