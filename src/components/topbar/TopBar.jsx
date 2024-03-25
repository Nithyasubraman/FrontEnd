import React from 'react'
import "./topbar.css";
import { Link } from 'react-router-dom';

function TopBar() {
  const user = false;
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
            <Link className='link' to="/" >HOME</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/">ABOUT</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/">CONTACT</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/write">WRITE</Link>
          </li>
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
              <li>
                <a href="/search">
              <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
              </a>
              </li>
              &nbsp;
              <li className='topListItm'>
              <Link id='loginButton' className='link' to="/login">
                LOGIN
              </Link>
              </li>
              <li className='topListItm'>
              <Link id='registerButton' className='link' to="/register">
                REGISTER
              </Link>
              </li>
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