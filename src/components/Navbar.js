// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { Link, useHistory } from 'react-router-dom';
import { isAuthenticated, isAdmin, logout } from '../utils/auth';
import '../styles/Navbar.css';
import Cookies from 'js-cookie';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('userData');
    window.location.href = '/login';
    // logout();
    // navigate('/login');
  };

  return (
    <nav className="navbar" style={{backgroundColor:"black"}}>
      <div className="navbar-brand">
        &nbsp;&nbsp;
        <Link to="/home">My Blog</Link>
      </div>
      <div>
        <h1>Blogging Website</h1>
      </div>
      <div className="navbar-menu">
        {/* <Link to="/blogs">Blogs</Link>
        {isAuthenticated() && (
          <Link to="/create">Create Post</Link>
        )} */}
        {/* {isAdmin() && (
          <Link to="/admin">Admin</Link>
        )} */}

        <Link to="/adminlogin">Admin</Link>
        {/* <Link to="/adminlogin">Admin</Link> */}
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <button id='logoutButton' onClick={handleLogout}>Logout</button>
        {/* {isAuthenticated() ? (
          <Link to="#" onClick={handleLogout} className='logout' style={{marginRight:"160px"}}>Logout</Link>
        ) : (
          // <Link to="/login">Logout</Link>
          <button id='logoutButton' onClick={handleLogout}>Logout</button>
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;








// import React from 'react';
// import { Link } from 'react-router-dom';
// import { isAuthenticated, isAdmin } from '../utils/auth';
// import '../styles/Navbar.css';

// const Navbar = () => {
//     const handleLogout = () => {
//         logout();
//         history.pushState('/login');
//     }
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <Link to="/">My Blog</Link>
//       </div>
//       <div className="navbar-menu">
//         <Link to="/blogs">Blogs</Link>
//         {isAuthenticated() && (
//           <Link to="/create">Create Post</Link>
//         )}
//         {isAdmin() && (
//           <Link to="/admin">Admin</Link>
//         )}
//         {isAuthenticated() ? (
//           <Link to="/logout" onClick={() => handleLogout()}>Logout</Link>
//         ) : (
//           <Link to="/login">Login</Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;