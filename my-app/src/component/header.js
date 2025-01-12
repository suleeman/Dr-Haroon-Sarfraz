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
                <li> Our Team</li>
                <li> Treatments</li>
                <li> Testmonials</li>
                <li> Patient Reports</li>
                
            </ul>
             </nav>

        </div>
    </header>
  )
}
