import React from 'react'
import "../styles/HomeDisplay.scss";
import { useNavigate } from 'react-router-dom';

const BookingOnlineButton = () => {
    const navigate = useNavigate();



    const bookingOnline = () => {
          navigate("/bookingOnline")
    }
  return (
    <button className='homedisplay-button' onClick={bookingOnline}> Book your Appointment </button>


    
  )
}

export default BookingOnlineButton