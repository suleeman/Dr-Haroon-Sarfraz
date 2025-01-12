import React from 'react';
import  "../styles/Header.scss"


export const Header = () => {
  return (
    <header className="header">
        <div className="headersub">
            <p className='header-logo'>Dr Haroon Sarfraz</p>
            <img className= "header-icon " src={require('../images/header-icon.png')} /> 
             <nav> 
            <ul className='header-nav'> 
                <li> Home</li>
                <li> My Team</li>
                <li> Treatments</li>
                <li> Patient Portal</li>
                <li> About Us</li>
                
            </ul>
             </nav>

        </div>
    </header>
  )
}
