
import React from 'react'
import "../styles/HomeDisplay.scss";

import BookingOnlineButton from './BookingOnlineButton';


export const HomeDisplay = () => {



  return (
    <div className='homeDisplay'>
        <div className='homeDisplay-sub'>

        <div className='homedisplay-details'>    
        <h1 className='homedisplay-heading'> We’re here for whatever kind of care your smile needs. </h1>
        <p className='homedisplay-description'>Our dental team provides exceptional dental treatments for you and your family. As a valued patient we can provide a comprehensive range of general & cosmetic dental services.</p>
       <BookingOnlineButton />
        </div>
        
        <div className="homedisplay-video">
        <video  autoPlay loop  muted>
               <source src={"/images/homepage.mp4"} type="video/mp4" width="900px"/>
               </video>        
        </div>




    
     </div>
    </div>
  )
}
