import React from 'react';
import "../styles/treatmentsStyling//Treatments.scss"

import {Tcard} from "../component/T-card";
import BookingOnlineButton from '../component/BookingOnlineButton';


export const Treatments = () => {
  console.log(window.location.pathname);
  
  return (
    <> 
  
      <Tcard/>
    <div className='booking-button-treatments'> <BookingOnlineButton /> </div>  
    

      </>
    )
  }


export default Treatments