import React from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <a href="#home">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#about">
              <FaUser /> About
            </a>
          </li>
          <li>
            <a href="#projects">
              <FaProjectDiagram /> Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              <FaEnvelope /> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
