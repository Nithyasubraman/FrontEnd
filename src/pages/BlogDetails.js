import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/BlogDetails.css';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) {
    return <div className="blog-details">Loading...</div>;
  }

  return (
    <div className="blog-details">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      {/* Add comments section */}
    </div>
  );
};

export default BlogDetails;