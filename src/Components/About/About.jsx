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
              <p>I'm a final-year Computer Science student with a passion for building front-end web applications. I enjoy turning ideas into clean, functional code. I'm currently sharpening my skills and building real-world projects to launch my career as a front-end developer. I'm always exploring new technologies that help me create better, faster, and more scalable applications. Whether it's crafting intuitive user interfaces or writing efficient APIs, I love the problem-solving process that development brings.</p>
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