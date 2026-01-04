// import React from 'react'
import './About.css'
import Skills_Data from '../../assets/skills_data.js'

const About = () => {

  console.log('Icon');

  return (
    <>
      <div id='about' className="about">
        <div className="about-title">
          <h1>About me</h1>
        </div>

        <div className="about-sections">
          <div className="about-top">
            <div className="about-para">
              <p>I am a Computer Science graduate (awaiting final completion letter, graduation expected April 2026) with practical experience in web and software development, demonstrated through personally built and maintained websites and projects. Committed to developing user-friendly solutions and bringing technical skills and fresh perspectives to a digital-focused environment.</p>
            </div>
            <hr />
          </div>

          <div className="about-bottom">
            <h1>Skills</h1>
            <div className="skills-container">
              {Skills_Data.map(({icon: SkillIcon, name: SkillName})=>{
                return <div className="skills-format">
                <SkillIcon size={40}/>
                <h3>{SkillName}</h3>
                </div>
              })}
            </div>
          </div>
    
        </div>
      </div>     
    </>
  )
}

export default About