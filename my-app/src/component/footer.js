import React from 'react'
import "../styles/Footer.scss"

export const Footer = () => {
  return (
    <footer className='footer'>  
        <div className='footer-sub'> 
        <div className='footer-timings'> 
        <h5> Opening Hours</h5>
        <ul className='footer-timings-details'>
            <li> Monday: 8.30am-5.30pm</li>
            <li> Tuesday: 8:30am-1:30pm</li>
            <li> Wednesday: 8.30am-5.30pm</li>
            <li> Thursday: 8.30am-5.30pm</li>
            <li> Friday: 8.30am-5.30pm</li>
            <li> Saturday: 8.30am-1.30pm</li>
            <li> Sunday & Public Holiday: Closed</li>
             </ul>
        </div>
        <div className='footer-second-part'> 
        <div className='footer-address-details'> 
         <h5> Our Location</h5>

        <p> 
        Dr haroon Sarfraz Clinic <br></br>
46 muslim street, muslim town  <br></br> lahore, Punjab  <br></br>
+923236927951  <br></br>
info@drharoonsarfraz.com.au</p>
         </div>
        <div className='footer-social-details'>  <h5> Socials</h5> 
        <img src={require("../images/facebook.png")}/>
        <img src={require("../images/instagram.png")}/>
        <img src={require("../images/linkedin.png")}/>
        </div>
        </div>
        </div>
    </footer>
  )
}


