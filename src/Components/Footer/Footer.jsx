import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
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
          <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={user_icon} alt="" />
              <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">
              Subscribe
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <p className="footer-bottom-left">© 2025 Thanyani Katleho Denge. All Rights Reserved.</p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer