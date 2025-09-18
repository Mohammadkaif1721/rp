import React from 'react'
import './Navbar.css'


const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="navbar">
      <h1 onClick={() => scrollToSection('home')}>MOHAMMED KAIF</h1>
      <ul className="nav-menu">
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('skills')}>Skills</li>
        <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
