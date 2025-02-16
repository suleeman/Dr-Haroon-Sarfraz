import React from 'react';
import  "../styles/Header.scss"
import { NavLink } from 'react-router-dom';



export const Header = () => {
  return (
    <header className="header">
        <div className="headersub">
            <p className='header-logo'>Dr Haroon Sarfraz</p>
            <img className= "header-icon " src={'/images/header-icon.png'} /> 
            <nav>
    <ul className='header-nav'>
      <li>
        <NavLink to="/" className="li"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/MyTeam" className="li"> My Team</NavLink>
      </li>
      <li>
        <NavLink to="/Treatments" className="li"> Treatments</NavLink>
      </li>
      <li>
        <NavLink to="/PatientPortal" className="li"> Patient Portal</NavLink>
      </li>

    </ul>
  </nav>

        </div>
    </header>
  )
}
