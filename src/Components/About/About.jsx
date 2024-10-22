import React from 'react'
import './About.css'
import Autotext from '../Autotext'

const About = () => {
  
  const val = ['About Me']

  return (
    <div className='about'>
      <div className="about-title">
        <h1><Autotext val= {val}></Autotext></h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="/assets/anuj-img.jpg" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hello! I'm a B.Tech student at IIT Gandhinagar with a passion for full-stack web development & DevOps. On the frontend, I have expertise in JavaScript, TypeScript, React, Next.js, and Tailwind CSS, and I've worked with animation libraries like Locomotive Scroll, Framer Motion and GSAP. On the backend, I'm experienced with Express.js, Node.js, and Flask. Additionally, I'm proficient in managing both MongoDB and SQL databases, with a solid understanding of Git, GitHub, Docker containerization, and deploying applications using AWS services.
            </p>
            <p>I am always open to collaborations and new opportunities. Feel free to explore my projects and contact me!</p> 
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>Mongo DB</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>Express JS</p><hr style={{width:"75%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"90%"}}/></div>
            <div className="about-skill"><p>Node JS</p><hr style={{width:"60%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="achivement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="achivement center-achivement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="achivement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
