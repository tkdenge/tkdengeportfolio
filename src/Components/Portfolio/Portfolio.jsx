import React from 'react'
import './Portfolio.css'
import projects_data from '../../assets/projects_data.js'
import { GoArrowRight } from 'react-icons/go'

const Portfolio = () => {
  return (
    <>
      <div id='portfolio' className="portfolio">
        <div className="portfolio-title">
          <h1>My latest work</h1>
        </div>
        <div className="portfolio-container">
          {projects_data.map((project,index) => {
            return <img key={index} src={project.p_img} alt="" />
          })}
        </div>
        <div className="portfolio-showmore">
          <p>Show more</p>
          <GoArrowRight size={40}/>
        </div>
      </div>
    </>
  )
}

export default Portfolio