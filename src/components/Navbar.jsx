import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-deca">DECA</span>
          <span className="logo-net">NET</span>
          <span className="logo-slogan">ROUTE DU PROPRE</span>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Menu Links */}
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#accueil" onClick={closeMenu}>Accueil</a></li>
          <li><a href="#about" onClick={closeMenu}>Qui sommes-nous</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#equipements" onClick={closeMenu}>Équipements</a></li>
          <li><a href="#references" onClick={closeMenu}>Références</a></li>
          <li><a href="#contact" className="btn-contact" onClick={closeMenu}>Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;