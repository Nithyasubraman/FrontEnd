import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import './manageUsers.css'


const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5122/api/Login/UserSignup");
                setUsers(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = (id) => {
        // Call the API to delete the user
        fetch(`http://localhost:5122/api/Admin/users/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    // If deletion is successful, update the users list by filtering out the deleted user
                    setUsers(users.filter(item => item.id !== id));
                    window.alert("Are you sure you want to remove this user?");
                } else {
                    // Handle error
                    console.error('Error deleting user');
                }
            });
    };

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        {/* <th>Password</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            {/* <td>{user.password}</td> */}
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ManageUsers;























