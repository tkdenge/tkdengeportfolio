import { useState } from "react";
import "./Navbar.css";
import { Menu, X } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <AnchorLink
          className="anchor-link"
          offset="80"
          href="#home"
          onClick={() => setMenu("home")}
        >
          DENGE
        </AnchorLink>
      </div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "portfolio", label: "Portfolio" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <li key={item.id}>
            <AnchorLink
              className={`anchor-link ${menu === item.id ? "active" : ""}`}
              offset="80"
              href={`#${item.id}`}
              onClick={() => {
                setMenu(item.id);
                closeMenu();
              }}
            >
              {item.label}
            </AnchorLink>
          </li>
        ))}

        {/* CV Button */}
        <li>
          <a href="/CV_TK_DENGE.pdf" download="CV-TK DENGE.pdf" onClick={closeMenu}>
            <button className="nav-cv-btn">Download CV</button>
          </a>
        </li>
      </ul>

      {/* Overlay for mobile */}
      {menuOpen && <div id="overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default NavBar;
