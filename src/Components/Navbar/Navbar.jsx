import {useState} from 'react'
import './Navbar.css'
import {Menu, X} from 'lucide-react'

import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavBar = () => {

  const [menu,setMenu] = useState('home');

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      <div className="navbar">
        <div class="nav-logo">
          <a href="">
              <AnchorLink className='anchor-link' offset='80' href="#home">
                <p onClick={()=>setMenu('home')}>DENGE</p>
              </AnchorLink>
          </a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <X size={40} /> : <Menu size={40} />}
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <a href="">
              <AnchorLink className='anchor-link' offset='80' href="#home">
                <p onClick={()=>setMenu('home')}>Home</p>
              </AnchorLink>
            </a> 
          </li>

          <li>
            <a href="">
              <AnchorLink className='anchor-link' offset='80' href="#about">
                <p onClick={()=>setMenu('about')}>About</p>
              </AnchorLink>
            </a>
          </li>

          <li>
            <a href="">
              <AnchorLink className='anchor-link' offset='80' href="#portfolio">
                <p onClick={()=>setMenu('work')}>Portfolio</p>
              </AnchorLink>
            </a>
          </li>

          <li>
            <a href="">
              <AnchorLink className='anchor-link' offset={50} href="#contact">
                <p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>
            </a>
          </li>
          
          <li>
            <a href="/src/assets/CV TK.pdf" download="CV-TK DENGE.pdf">
              <button className='nav-cv-btn'>Download CV</button>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
