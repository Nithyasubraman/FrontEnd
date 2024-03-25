import React from 'react'
import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://pikwizard.com/pw/small/5a45c2e5867a3b1e748e4d39ec03dacb.jpg" alt="Profile" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Labore officia earum magnam quis, tempore vel quam. 
               </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Fashion</li>
            <li className="sidebarListItem">Travel</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Fun</li>
            <li className="sidebarListItem">Health</li>
            <li className="sidebarListItem">Business</li>
            <li className="sidebarListItem">Technology</li>
            {/* <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinemas</li> */}
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-pinterest-p"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
        </div>
    </div>
  )
}

export default Sidebar