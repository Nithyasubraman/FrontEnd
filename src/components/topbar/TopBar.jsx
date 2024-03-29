import React from 'react'
import "./topbar.css";
import { Link } from 'react-router-dom';
// import { Container, Form, Card, Row, Col, Button } from "react-bootstrap";
import Cookies from 'js-cookie';



function TopBar() {
  const user = false;

  const handleLogout = () => {
    Cookies.remove('userData');
    window.location.href = '/login';
    // logout();
    // navigate('/login');
  };

  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest-p"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className='topListItem'>
            <Link className='link' to="/home" >HOME</Link>
          </li>
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          {/* <li className='topListItem'>
            <Link className='link' to="/">ABOUT</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/">CONTACT</Link>
          </li> */}
          <li className='topListItem'>
            <Link className='link' to="/write">WRITE YOUR BLOG</Link>
          </li>
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <li className='topListItem'>   
          <Link className='link' to="/search"> SEARCH BLOGS </Link>
               
                &nbsp;&nbsp;
                <a href="/search">
              <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
              </a>
              </li>
          {/* <li>   
                <a href="/search">
                Search Blogs
              <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
              </a>
              </li> */}
          {/* <li>
          <div className="side-nav">
            <br/>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                
              />
              <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </Form>
          </div>
          </li> */}
          {/* <Link className='link' to="/">LOGOUT</Link> */}
          <li className='topListItem'>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className='topImg'
              // src="https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?w=216&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
              src="https://th.bing.com/th/id/OIP.-uTnzC-84kuti3NroAN2-gHaJf?pid=ImgDet&w=200&h=256&c=7&dpr=1.3"
              alt="Profile" />
          ) : (
            <ul className='topList'>
              
              &nbsp;
              {/* <li className='topListItm'>
              <Link id='loginButton' className='link' to="/login">
                LOGIN
              </Link>
              </li>
              <li className='topListItm'>
              <Link id='registerButton' className='link' to="/register">
                REGISTER
              </Link>
              </li> */}
{/* 
              <li className='topListItm'>
              <button id='logoutButton' onClick={handleLogout}>Logout</button>
              </li> */}

              {/* <Link className='link' to="/register">
                Register
              </Link> */}
            </ul>
          )
        }
      </div>
    </div>
  )
}

export default TopBar