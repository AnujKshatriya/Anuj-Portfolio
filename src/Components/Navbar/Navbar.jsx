import React, { useRef } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci"
import { MdOutlineCancel } from "react-icons/md"
import logo from "/assets/aklogo-removebg-preview.png"

const Navbar = () => {

  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right = "0"
  }
  const closeMenu = ()=>{
    menuRef.current.style.right = "-350px"
  }
  const getSearch = (url)=>{
    window.open(url,'_blank', 'noopener,noreferrer')
  }

  return (
    <div className='nav'>
      <img className='logo' src={logo} alt="" />
      <CiMenuFries onClick={openMenu} className='nav-open'/>
      <div ref={menuRef} className="nav-content">
        <ul className='nav-list'>
          <MdOutlineCancel onClick={closeMenu} className='nav-close'/>
          <li onClick={closeMenu} className='nav-elem'>
            <NavLink 
            to="/"
            className={({isActive}) =>
              `${isActive ? "Decoration" : "noDecoration"}`
          }>
            Home
            </NavLink>
            </li>
            <li onClick={closeMenu} className='nav-elem'>
            <NavLink 
            to="about"
            className={({isActive}) =>
              `${isActive ? "Decoration" : "noDecoration"}`
          }>
            About Me
            </NavLink>
            </li>
            <li onClick={closeMenu} className='nav-elem'>
            <NavLink
            to="projects"
            className={({isActive}) =>
              `${isActive ? "Decoration" : "noDecoration"}`
          }>
              My Projects
            </NavLink>
            </li>
            <li onClick={closeMenu} className='nav-elem'>
            <NavLink
            to="contact"
            className={({isActive}) =>
              `${isActive ? "Decoration" : "noDecoration"}`
          }>
            Contact
            </NavLink>
            </li>
        </ul>
      </div>
      <div onClick={()=>getSearch("https://www.linkedin.com/in/anuj-kshatriya/")} className="nav-btn">Connect With Me</div>
    </div>
  )
}

export default Navbar
