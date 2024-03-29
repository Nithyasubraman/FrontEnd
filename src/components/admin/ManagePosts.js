import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Row, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import './managePosts.css';

const Admin = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5122/api/BlogPosts");
                setBlogs(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []); 
    
    const handleDelete = (id) => {
        // Confirm with the user before deleting the blog post
        if (window.confirm("Are you sure you want to remove this blog?")) {
            fetch(`http://localhost:5122/api/Admin/blogposts/${id}`, 
            {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    // If deletion is successful, update the blog list by filtering out the deleted blog
                    // setBlog(prevBlog => prevBlog.filter(item => item.id !== id));
                    setBlogs(blogs.filter(item => item.id !== id));
                } else {
                    // Handle error if response is not ok
                    console.error('Error deleting blog post');
                }
            })
            .catch(error => {
                // Handle any errors that occurred during fetch
                console.error('Error:', error);
            });
        }
    };

    return (
        <div>
            <Row>
                {/* <Navbar className='navbar nav-head ' fixed="top" style={{ position: 'fixed' }}> */}
                {/* <Navbar>
                <Container className='adminnav align-items-center mb-4'>
                        <Navbar.Brand>
                            {/* <h4><span className='nav-text' style={{ color: 'black' }} >Pet Shop Management <PetsOutlinedIcon /></span></h4> */}
                        {/* </Navbar.Brand> */}
                        {/* <Nav className="justify-content-end me-3">
                            <Navbar.Toggle aria-controls='basic-navbar-nav' />
                            <Navbar.Collapse id='basic-navbar-nav'>
                                <Nav.Item>
                                    <Nav.Link className='nav-sidetext' style={{ color: 'black' }} ></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link ><span className='nav-sidetext' style={{ color: 'black' }}></span></Nav.Link>
                                </Nav.Item>
                            </Navbar.Collapse>
                        </Nav> */}
                    {/* </Container> */}

                {/* </Navbar> */} 
            </Row>
            <div className='deleteaccessory'>
                {blogs.map((blog) => (
                    <Card key={blog.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={blog.imageUrl} />
                        <Card.Body >
                            <Card.Title>{blog.title}</Card.Title>
                            <br/>
                            <Card.Text>{blog.content}</Card.Text>
                            <Card.Text> {blog.postedDate}</Card.Text>
                            <Card.Text> {blog.category}</Card.Text>
                            <Button variant="danger" onClick={() => handleDelete(blog.id)}>Delete</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Admin;
