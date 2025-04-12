import React, {useState} from 'react';
import {Inputs} from "../component/Inputs"
import "../styles/bookingOnlineStyling/BookingOnline.scss";
import "../styles/patientAuthenticationPortalSytyling/PatientAuthenticationPortal.scss"

import { NavLink } from 'react-router-dom';




export  const PatientAuthenticationPortal = () => {

  const [inputs, setInputs] = useState({});
  const handlechange = (event) => {
  
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value  
    }));
  };


  return (
    <div className='sign-on'>
        <div className='sub-sign-on'> 
      
        <form className="Patient-authentication-form-inputs"> 
        <h1 className='patient-poortal'> Get Your Reports</h1>
          <h2>Patient Portal</h2>       
           <div className="booking-form-input">
           <Inputs labelName={"Username"} type={"text"} name={"Firstname"} onChange={handlechange} placeholder={"username or phone number"} />
            </div>
            <div className="booking-form-input">
            <Inputs labelName={"Password"} type={"text"} name={"Firstname"} onChange={handlechange}placeholder={"password"}  />
        </div>
        <p> Forget password, <NavLink to="/ForgetCredential"> click here</NavLink></p>
        <button className='patient-form-login'> Login </button>
     
        
          
        </form>

        </div>
    </div>
  )
}

