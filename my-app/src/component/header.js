import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/headerStyling/Header.scss";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="headersub">
        <p className="header-logo">Dr Haroon Sarfraz</p>
        <img className="header-icon" src={'/images/header-icon.png'} alt="Logo" />
        <nav>
          <ul className={`header-nav ${menuOpen ? 'open' : ''}`}>
            <li>
              <NavLink to="/" className="li">Home</NavLink>
            </li>
            <li>
              <NavLink to="/MyTeam" className="li">My Team</NavLink>
            </li>
            <li>
              <NavLink to="/Treatments" className="li">Treatments</NavLink>
            </li>
            <li>
              <NavLink to="/PatientPortal" className="li">Patient Portal</NavLink>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};
