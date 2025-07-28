import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profileImage.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <>
      <div id='home' className="hero">
        <img src={profile_img} width='200' alt="" />

        <h1><span>I'm Thanyani Katleho Denge</span> an aspiring front-end developer  </h1>

        <p>I design and code beautifully simple things and I love what I do.</p>

        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' href="#contact">Contact me!</AnchorLink></div>
          <div className="hero-resume">Resume</div>
        </div>
      </div>
    </>
  )
}

export default Hero