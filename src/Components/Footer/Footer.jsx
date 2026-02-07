import React from 'react'
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { DiGithubBadge } from 'react-icons/di'
import { FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <div class="footer-logo">
                <a href="">
                  <AnchorLink className='anchor-link' offset='80' href="#home">
                    <p>DENGE</p>
                  </AnchorLink>
                </a>
            </div>
            <p>I enjoy turning ideas into clean, functional code.</p>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="footer-social-links">
              <a 
                href="https://github.com/tkdenge/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <DiGithubBadge className='github' size={35} color="#9b9ea0ff" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tkdenge/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={35} color="#9b9ea0ff" />
              </a>
              <a 
                href="mailto:tkdenge3@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Mail"
              >
                <FiMail size={35} color="#9b9ea0ff" />
              </a>
            </div>
            <p>© 2026 Thanyani Katleho Denge.</p>
          </div>
          
          <div className="footer-bottom-right">
            <a href="">
              <AnchorLink className='anchor-link' offset='80' href="#about">
                <p >About</p>
              </AnchorLink>
            </a>
            <a>
              <AnchorLink className='anchor-link' offset='80' href="#portfolio">
                <p >Portfolio</p>
              </AnchorLink>
            </a>
            <a>
              <AnchorLink className='anchor-link' offset='80' href="#contact">
                <p >Contact</p>
              </AnchorLink>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer