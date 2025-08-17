import React from 'react';
import "../styles/globalStyling/global.css";
import { useNavigate } from 'react-router-dom';


export const BookingSuccessful = () => {
  const navigate = useNavigate();
     setTimeout(() => {
        navigate("/");
   }, 4000);
  return (
<div className='global extramargin'>
  <h1>Your booking is successfully created</h1>
  <h3>Please arrive on time. If there are any delays or you want to change the appointment, call us on 0416 880 295.</h3>
</div>


   
  );
};

export default BookingSuccessful;