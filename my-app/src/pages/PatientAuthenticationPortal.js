import React, {useState} from 'react';
import {Inputs} from "../component/Inputs"
import "../styles/bookingOnlineStyling/BookingOnline.scss";
import "../styles/patientAuthenticationPortalSytyling/PatientAuthenticationPortal.scss"
import { useHandleChange } from '../component/useHandleChange';
import { UseHandleFormsSubmits } from "../component/UseHandleFormsSubmits";
import { NavLink } from 'react-router-dom';
import { Alert } from '../component/Alert';




export  const PatientAuthenticationPortal = () => {

  const { inputs, handleChange } = useHandleChange();
  const {submitHandler,setAllInputValueEmpty, setSomeInputValueEmpty, missingValue, dob} = UseHandleFormsSubmits();

  const requiredInputField = ["username", "password"];
  return (
    <div className='sign-on'>
        <div className='sub-sign-on'> 
      
        <form className="Patient-authentication-form-inputs" onSubmit={(e) => submitHandler(e, inputs, requiredInputField) }> 
        <h1 className='patient-poortal'> Get Your Reports</h1>
          <h2>Patient Portal</h2>       

          <Alert setAllInputValueEmpty={setAllInputValueEmpty}  setSomeInputValueEmpty={setSomeInputValueEmpty}  missingValue={missingValue}/>
           <div className="booking-form-input">
           <Inputs labelName={"Username"} type={"text"} name={"username"} onChange={handleChange} placeholder={"username or phone number"} />
            </div>
            <div className="booking-form-input">
            <Inputs labelName={"Password"} type={"text"} name={"password"} onChange={handleChange}placeholder={"password"}  />
        </div>
        <p> Forget password, <NavLink to="/ForgetCredential"> click here</NavLink></p>
        <button className='patient-form-login' type='submit'> Login </button>
     
        
          
        </form>

        </div>
    </div>
  )
}

