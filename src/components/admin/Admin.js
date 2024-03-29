import React, { useState } from 'react';
import './admin.css'; // Import CSS file for styling

import ManageUsers from './ManageUsers';
import ManagePosts from './ManagePosts';
import Navbar from '../Navbar';
// import TopBar from '../topbar/TopBar';
import ManageComments from './ManageComments';
import CommentsManagement from './CommentsManagement';

function Admin() {
  const [activePage, setActivePage] = useState('ManageUsers'); // Default active page

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
  };

  return (
    <div>
      <Navbar/>
      {/* <br/> */}
      {/* <TopBar/> */}
    <div className='admin'>
      <div className="nav-container">
        <br/>
        <br/>
        <div>
          <button
            className={`nav-button ${activePage === 'ManageUsers' ? 'active' : ''}`}
            onClick={() => handlePageChange('ManageUsers')}
          >
            Manage Users
          </button>
        </div>
        <br/>
        <div>
          {/* <button
            className={`nav-button ${activePage === 'ManagePosts' ? 'active' : ''}`}
            onClick={() => handlePageChange('ManagePosts')}
          >
            Manage Posts
          </button> */}

            <button
            className={`nav-button ${activePage === 'ManagePosts' ? 'active' : ''}`}
            onClick={() => handlePageChange('ManagePosts')}
          >
            Manage Posts
          </button>
          &nbsp;&nbsp;&nbsp;
          {/* <button
            className={`nav-button ${activePage === 'ManageComments' ? 'active' : ''}`}
            onClick={() => handlePageChange('ManageComments')}
          >
            Manage Comments
          </button> */}

          {/* <button
            className={`nav-button ${activePage === 'CommentsManagement' ? 'active' : ''}`}
            onClick={() => handlePageChange('CommentsManagement')}
          >
            Manage Comments
          </button> */}
        </div>
        <br/>
      </div>
      <div className="page-container">
        {activePage === 'ManageUsers' && <ManageUsers />}
        {activePage === 'ManagePosts' && <ManagePosts />}
        {/* {activePage === 'CommentsManagement' && <CommentsManagement/>} */}
      </div>
    </div>
    </div>
  );
}

export default Admin;

















// import React, { useState } from 'react';
// import './admin.css'; // Import CSS file for styling

// import ManageUsers from './ManageUsers';
// import ManagePosts from './ManagePosts';

// function Admin() {
//   const [activePage, setActivePage] = useState('ManageUsers'); // Default active page

//   const handlePageChange = (pageName) => {
//     setActivePage(pageName);
//   };

//   return (
//     <div>
//       <div className="nav-container">
//         <button
//           className={`nav-button ${activePage === 'ManageUsers' ? 'active' : ''}`}
//           onClick={() => handlePageChange('ManageUsers')}
//         >
//           Manage Users
//         </button>
//         <button
//           className={`nav-button ${activePage === 'ManagePosts' ? 'active' : ''}`}
//           onClick={() => handlePageChange('ManagePosts')}
//         >
//           Manage Posts
//         </button>
//       </div>
//       <div className="page-container">
//         {activePage === 'ManageUsers' && <ManageUsers />}
//         <br/>
//         <br/>
//         {activePage === 'ManagePosts' && <ManagePosts />}
//       </div>
//     </div>
//   );
// }

// export default Admin;



















// import React from 'react'
// import ManageUsers from './ManageUsers';
// import ManagePosts from './ManagePosts';


// function Admin() {
//   return (
//     <div>
//       <ManagePosts/>
//       <ManageUsers/>
//     </div>
//   )
// }

// export default Admin