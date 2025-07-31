import React from 'react'
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
            <p>© 2025 Thanyani Katleho Denge.</p>
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