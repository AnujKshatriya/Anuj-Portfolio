import React from 'react'
import './Home.css'

const Home = () => {
  const linkedinUrl = "https://www.linkedin.com/in/anuj-kshatriya/"
  const getSearch = (url)=>{
    window.open(url,'_blank', 'noopener,noreferrer')
  }

  return (
    <div className='hero'>
      <div className='hero-image'>
        <img src="/assets/anuj-img.jpg" alt="" />
      </div>
      <h1 className='hero-h1'><span>I'm Anuj Kshatriya</span>, Full Stack Developer from <strong>India</strong> </h1>
      <p>With a strong expertise in the MERN stack & deployment, I specialize in crafting dynamic and visually engaging frontend experiences using React, Next.js</p>
      <div className="hero-action">
        <div onClick={()=>getSearch(linkedinUrl)} className=" btn hero-connect">Connect</div>
        <div onClick={()=>getSearch("https://drive.google.com/file/d/14l_1yWYqql0qkY6tVHM9uYPi1cZsd0Wk/view?usp=sharing")} className=" btn hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Home
