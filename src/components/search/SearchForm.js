import React, { useState, useEffect } from "react";
import { Container, Form, Card, Row, Col} from "react-bootstrap";
// import { Container, Form, Card, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Navbar from "../Navbar";
import TopBar from "../topbar/TopBar";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5122/api/BlogPosts`);
        // Filter the results based on the title matching the search term
        const filteredResults = response.data.filter(blog =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
       <Navbar/>
        <br/>
        <TopBar/>
        <br/>
        <br/>
    <Row>
      <Col md={9} xs={9}>
        <Container className="search-container">
          <Row className="search">
            <Col></Col>
            <Col>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search Blogs Here..."
                  onChange={handleSearchChange}
                  value={searchTerm}
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <br/>
            </Col>
            <Col></Col>
          </Row>
          <br/>
          <Row>
            {searchResults.map((blog, index) => (
              <Col key={index} md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>
                      <div className="panel-body" style={{width:"350px",borderRadius:"12px"}} id='postImg'>
                        <img src={blog.imageUrl} alt={blog.title} />
                      </div>
                    </Card.Title>
                    <Card.Title>{blog.title}</Card.Title>
                    <br/>
                    <Card.Text>{blog.content}</Card.Text>
                    <Card.Text>{blog.postedDate}</Card.Text>
                    <Card.Text>{blog.category}</Card.Text>
                    {/* <Button variant="danger">
                      <DeleteForeverOutlinedIcon/>
                    </Button> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Col>
    </Row>
    </div>
  );
}

export default SearchForm;





























// import React, { useState, useEffect } from "react";
// import { Container, Form, Card, Row, Col, Button } from "react-bootstrap";
// import axios from "axios";
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

// function SearchForm() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (searchTerm) {
//           const response = await axios.get(`http://localhost:5122/api/BlogPosts?search=${searchTerm}`);
//           setSearchResults(response.data);
//         } else {
//           setSearchResults([]);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, [searchTerm]);

//   return (
//     <>
//       <Row>
//         {/* <Col>
//           <div className="side-nav">
//             <br/>
//             <Form className="d-flex">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 onChange={handleSearchChange}
//                 value={searchTerm}
//                 className="me-2"
//                 aria-label="Search"
//               />
//             </Form>
//           </div>
//         </Col> */}
//         <Col md={9} xs={9}>
//           <Container className="leave-container">
//             <Row className="search">
//               <Col></Col>
//               <Col>
//                 <Form className="d-flex">
//                   <Form.Control
//                     type="search"
//                     placeholder="Search Blogs Here..."
//                     onChange={handleSearchChange}
//                     value={searchTerm}
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                 </Form>
//               </Col>
//               <Col></Col>
//             </Row>
//             <br/>
//             <Row>
//               {searchResults.map((blog, index) => (
//                 <Col key={index} md={4}>
//                   <Card className="mb-4">
//                     <Card.Body>
//                      <Card.Text>{blog.imageUrl}</Card.Text>
//                       <Card.Title>{blog.title}</Card.Title>
//                       <Card.Text>{blog.content}</Card.Text>
//                       <Card.Text>{blog.postedDate}</Card.Text>
//                       <Card.Text>{blog.category}</Card.Text>
//                       <Button variant="danger">
//                         <DeleteForeverOutlinedIcon/>
//                       </Button>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               ))}
//             </Row>
//           </Container>
//         </Col>
//       </Row>
//     </>
//   );
// }

// export default SearchForm;





























// import React, { useState, useEffect } from "react";
// import { Container, Form, Card, Row, Col, Table, Button } from "react-bootstrap";
// import axios from "axios";
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

// function SearchForm() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (searchTerm) {
//           const response = await axios.get(`http://localhost:5122/api/BlogPosts?search=${searchTerm}`);
//           setSearchResults(response.data);
//         } else {
//           setSearchResults([]);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, [searchTerm]);

//   return (
//     <>
//       <Row>
//         <Col>
//           <div className="side-nav">
//             <br/>
//             <Form className="d-flex">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 onChange={handleSearchChange}
//                 value={searchTerm}
//                 className="me-2"
//                 aria-label="Search"
//               />
//             </Form>
//           </div>
//         </Col>
//         <Col md={9} xs={9}>
//           <Container className="leave-container">
//             <Row className="search">
//               <Col></Col>
//               <Col>
//                 <Form className="d-flex">
//                   <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     onChange={handleSearchChange}
//                     value={searchTerm}
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                 </Form>
//               </Col>
//               <Col></Col>
//             </Row>
//             <br/>
//             <Row>
//               <Card className="card-status">
//                 <Card.Header>
//                   <h1>Your Search Results</h1>
//                 </Card.Header>
//                 <Card.Body>
//                   <Table striped hover>
//                     <thead>
//                       <tr>
//                         <th>Title</th>
//                         <th>Content</th>
//                         <th>Posted Date</th>
//                         <th>Category</th>
//                         <th>Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {searchResults.map((blog, index) => (
//                         <tr key={index}>
//                           {/* <td>{blog.imageUrl}</td> */}
//                           <td>{blog.title}</td>
//                           <td>{blog.content}</td>
//                           <td>{blog.postedDate}</td>
//                           <td>{blog.category}</td>
//                           <td>
//                             <Button variant="danger">
//                               <DeleteForeverOutlinedIcon/>
//                             </Button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </Table>
//                 </Card.Body>
//               </Card>
//             </Row>
//           </Container>
//         </Col>
//       </Row>
//     </>
//   );
// }

// export default SearchForm;
































// import React, { useState, useContext, useEffect } from "react";
// import "./searchForm.css";
// // import EmployeeHeader from "./EmployeeHeader";
// // import { empContext } from "./App";
// import { useParams } from "react-router-dom";
// import Cookies from "js-cookie";
 
 
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from "cdbreact";
// import { NavLink, Link } from "react-router-dom";
 
// import { Container,Form, Card, Row, Col, Table,Button } from "react-bootstrap";
// import axios from "axios";
 
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
 
// function SearchForm() {
//   // const { empDetails } = useContext(empContext);
//   const { id } = useParams();
//   const [leave, setLeave] = useState([]);
//   const [history, setHistory] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };
 
//   const filterblogssBySearchTerm = (blogss) => {
//     return blogss.filter((blogs) => {
//       const values = Object.values(blogs).join("").toLowerCase();
//       return values.includes(searchTerm.toLowerCase());
//     });
//   };
 
 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5122/api/BlogPosts/${id}`
//         );
//         setLeave(response.data);
       
//         console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
 
 
//     fetchData();
//   }, []);
 
// //   const handleDelete = async (leave) => {
// //     try {
// //         const response = await axios.get(`http://localhost:5052/api/Leave/GetIndividualLeave/${leave}`);
       
// //         console.log(response.data);
// //         Cookies.set('leaveid', response.data.leaveId);
// //         const initialValues = {
           
// //             leaveid: Cookies.get("leaveid"),
// //           };
// //         const deleteleave= await axios.post(`http://localhost:5052/api/Leave/Cancelblogs`,initialValues);
       
// //         if (deleteleave.status === 200) {
// //             // Successfully deleted
// //             // This will update the parent component's state
// //             window.alert("blogs deleted successfully")
// //         }
// //     } catch (error) {
// //         if (error.response && error.response.status === 404) {
// //             window.alert('blogs not found.');
// //         } else {
// //            window. alert('An error occurred while deleting blogs.');
// //         }
// //     }
// // };
 
//   return (
//     <>
//       <Row>
//         <Col>
//           <div
//             style={{
//               display: "flex",
//               height: "100vh",
//               overflow: "scroll initial",
//             }}
//             className="side-nav"
//           >
//              <br/>
//             <CDBSidebar textColor="#000000" backgroundColor="white">
//             <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               onChange={handleSearchChange}
//               value={searchTerm}
//               className="me-2"
//               aria-label="Search"
//             />
//           </Form>
//             </CDBSidebar>
//           </div>
//         </Col>
//         <Col md={9} xs={9}>
//           {/* <EmployeeHeader
//             name={empDetails.employeeName}
//             img={empDetails.employeeImageName}
//           /> */}
         
//           <Container className="leave-container">
//           <Row className="search">
//         <Col></Col>
//         <Col>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               onChange={handleSearchChange}
//               value={searchTerm}
//               className="me-2"
//               aria-label="Search"
//             />
//           </Form>
//         </Col>
//         <Col></Col>
//       </Row>
//       <br/>
//       <Row>
//             <Card className="card-status">
//               <Card.Header>
//                 <h1>Your Search Results</h1>
//               </Card.Header>
//               <Card.Body>
//                 <Table striped hover>
//                   <thead>
//                     {/* <tr>
//                       <th>From Date</th>
//                       <th>To Date</th>
//                       <th>Leave Type</th>
//                       <th>No Of Days</th>
//                       <th>Reason</th>
//                       <th>Status</th>
//                     </tr> */}
//                   </thead>
//                   <tbody>
//                   {filterblogssBySearchTerm(leave).map((blogs, index) => (
//                       <tr key={index}>
//                         <td>{blogs.title}</td>
//                         <td>{blogs.content}</td>
//                         <td>{blogs.postedDate}</td>
//                         <td>{blogs.category}</td>
//                         {/* <td>{blogs.reason}</td>
//                         <td>{blogs.status}</td> */}
//                         <td>
//                           <Button variant="danger" onClick={()=>handleDelete(blogs.leaveId)}>{<DeleteForeverOutlinedIcon/>}</Button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//               </Card.Body>
//             </Card>
//             </Row>
//           </Container>
//         </Col>
//       </Row>
//     </>
//   );
// }
 
// export default SearchForm;

































// // src/components/SearchForm.js

// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchForm = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState(null); 

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5122/api/Search/search?q=${query}`);
//       console.log(response.data);
//       setResults(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError('An error occurred while fetching data. Please try again later.');
//     }
//   };

// // useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get('/search?query=...');
// //         setBlogPosts(response.data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);
  

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search blogs..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

//       <ul>
//         {results.map((blog) => (
//           <li key={blog.id}>
//             <h3>{blog.title}</h3>
//             <p>{blog.content}</p>
//             <p>{blog.author}</p>
//             <p>{blog.postedDate}</p>
//             {/* Display other properties as needed */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchForm;
