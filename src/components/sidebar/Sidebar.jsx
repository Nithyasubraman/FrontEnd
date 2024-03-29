import React from 'react'
import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        {/* <span className="sidebarTitle">ABOUT ME</span> */}
        {/* <img src="https://pikwizard.com/pw/small/5a45c2e5867a3b1e748e4d39ec03dacb.jpg" alt="Profile" */}
        <img src="https://oliverzanetti.co.uk/uploads/2023/08/is-blogspot-still-popular-in.webp" alt="Profile"
          style={{ marginTop: "50px", borderRadius: "12px", width:"350px"}}/>
        <p>
          Welcome to the new favorite corner of the internet!
          Dive into fascinating blogs that will take you on exciting
          adventures and warm your heart. Whether you're a seasoned reader or just getting started,
          our diverse collection of blogs has something for everyone. 
          <br/>
          <br/>
          Join our friendly community and
          let your imagination run wild as you explore new worlds with every click.
          Come on in, relax, and enjoy the journey!
          <br/>
          <br/>
          <b>
          "Engage,inspire and be inspired! Join our dynamic community of bloggers
          and readers to discover new ideas,foster connections and make your mark in
          the digital world"
          </b>
        </p>
      </div>
      {/* <div className="sidebarItem">
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
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinemas</li>
        </ul>
        </div> */}
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