import React, {useState} from 'react';
import {Inputs} from "../component/Inputs";
import "../styles/BookingOnline.scss";






export const ForgetCredential = () => {
    const [inputs, setInputs] = useState({});
    const handlechange = (e) => {
        e.preventDefault();
    }
  return (
    <div className='form'>
        <form className='forget-passwoord-form'>
        <div className="booking-form-input">
        <Inputs labelName={"Email"} type={"text"} name={"Email"} onChange={handlechange} placeholder={"email or phone number"} />
      </div> 
        <div className="booking-form-input">
        <Inputs labelName={"Dob"} type={"text"} name={"dob"} onChange={handlechange} placeholder={"enter you date of birth 01/01/1999"} />
        </div>
             </form>
    </div>
  )
}
