import React from 'react'
import "./header.css";

function Header() {
  return (
    <div className="header">
        <div className="headerTitle">
            <span className='headerTitleSm'>React & .net</span>
            <span className='headerTitleLg'>Blog</span>
            </div> 
            <img className='headerImg' src="https://cdn.nimbusthemes.com/2017/09/09233334/Free-Nature-Backgrounds-Floral-by-Freepik-1024x1024.jpg" 
            alt="Headerpic" />
    </div>
  )
}

export default Header