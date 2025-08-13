import React from 'react'
import './Portfolio.css'
import projects_data from '../../assets/projects_data.js'
import { GoArrowRight } from 'react-icons/go'
import { DiGithubBadge } from 'react-icons/di'
import { CgWebsite } from 'react-icons/cg'

const Portfolio = () => {
  return (
    <>
      <div id='portfolio' className="portfolio">
        <div className="portfolio-title">
          <h1>My latest work</h1>
        </div>
        
        <div className="portfolio-container">
          {projects_data.map((project,index) => {
            return <div className='container-content'>
              <img key={index} src={project.p_img} alt="" />
              <h2>{project.p_name}</h2>
              <p>{project.p_des}</p>
              <div className="content-btns">
                <div className="view-site-btn">
                  <CgWebsite size={20}/>
                  <button 
                    onClick={() => window.open(`${project.p_site}`, "_blank")}
                  >
                    View Site
                  </button>
                </div>
                <div className="view-code-btn">
                  <DiGithubBadge size={20}/>
                  <button
                    onClick={() => window.open(`${project.p_github}`, "_blank")}
                  >
                    View Code
                  </button>
                </div>
              </div>

            </div>
          })}
        </div>

        <a href="https://github.com/tkdenge/" target="_blank" rel="noopener noreferrer">
        <div className="portfolio-showmore">  
            <p>Show more</p>
            <GoArrowRight size={40}/>
        </div>
        </a>
        
      </div>
    </>
  )
}

export default Portfolio