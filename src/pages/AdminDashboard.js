import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/api/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));

    axios
      .get('/api/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDeletePost = (postId) => {
    axios
      .delete(`/api/posts/${postId}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== postId));
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteUser = (userId) => {
    axios
      .delete(`/api/users/${userId}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="posts-section">
        <h3>Posts</h3>
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h4>{post.title}</h4>
            <p>{post.excerpt}</p>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="users-section">
        <h3>Users</h3>
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;