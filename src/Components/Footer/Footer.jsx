import React from 'react'
import "./Footer.css"
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {

  const handleIconClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    
      <div className="footer">
          <div className="footer-text">
          <p className="text">© 2024 Anuj Kshatriya.</p>
          <p>All rights reserved</p>
          </div>
          <div className="icons">
            <div className='icon'>
              <FaLinkedin 
              onClick={() => handleIconClick('https://linkedin.com/in/anuj-kshatriya')}
              className='mainicon linkedin'/>
            </div >
            <div className='icon'>
              <FaGithub 
              onClick={() => handleIconClick('https://github.com/AnujKshatriya')}
              className='mainicon github'/>
            </div>
            <div className='icon'>
              <FaSquareXTwitter 
              onClick={() => handleIconClick('https://x.com/Anuj_webdev')}
              className='mainicon twitter'/>
            </div>
          </div>
        </div>
  )
}

export default Footer
