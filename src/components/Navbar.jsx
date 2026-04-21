import React from 'react';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        <span className="nav-logo-dot" />
        sharmela.dev
      </a>
      <ul className="nav-links">
        <li><a href="#projects">projects</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#resume-download">resume</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <button className="theme-btn" onClick={toggleTheme}>◐ theme</button>
    </nav>
  );
}
