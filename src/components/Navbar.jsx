import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Sajid Shaikh Portfolio</div>
        <ul className="navbar-links">
          <li><a href="#home" className="navbar-link">Home</a></li>
          <li><a href="#certificates" className="navbar-link">Certificates</a></li>
          <li><a href="#projects" className="navbar-link">Projects</a></li>
          <li><a href="#resume" className="navbar-link">Resume</a></li>
          <li><a href="#skills" className="navbar-link">Skills</a></li>
        </ul>
      </div>
    </nav>
  );
}