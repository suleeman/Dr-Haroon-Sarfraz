import React from 'react';
import "../styles/Treatments.scss"
import {Footer} from '../component/footer';
import {Header} from "../component/header";
import {Tcard} from "../component/T-card";
import BookingOnlineButton from '../component/BookingOnlineButton';


export const Treatments = () => {
  console.log(window.location.pathname);
  
  return (
    <> 
      <Header />
      <Tcard/>
    <div className='booking-button-treatments'> <BookingOnlineButton /> </div>  
    
      <Footer />
      </>
    )
  }


export default Treatments