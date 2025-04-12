import React, {useState} from 'react';
import {Inputs} from "../component/Inputs";
import "../styles/bookingOnlineStyling/BookingOnline.css";
import "../styles/forgetCredential/forgetCredential.scss";
import {NavLink} from "react-router-dom"






export const ForgetCredential = () => {
    const [inputs, setInputs] = useState({});
    const [Codegenerated, setGenerated] = useState(false);
    const handleChange = (e) => {
        e.preventDefault();
    }
    const handleSubmit = () => {

    }
  return (
    <div className='forget-credential'>
      <h1> Reset your password </h1>
        <form className='form-authenticate-user-reset-password'>
        <div className="forget-password-form-inputs">
          <div className="forget-password-form-input">
          <Inputs labelName={"Email"} type={"text"} name={"Email"} onChange={handleChange} placeholder={"Email or Phone number"} />
        </div> 
          <div className="forget-password-form-input">
          <Inputs labelName={"Dob"} type={"text"} name={"dob"} onChange={handleChange} placeholder={"Date of birth 01/01/1999"} />
          </div>
          <p>Go back to login page <NavLink to="/PatientAuthenticationPortal"> click here</NavLink> </p>
          <button onClick={handleSubmit} className='forget-password-form-submit' > Submit </button>
        
           </div>
             </form>
        <form className='form-reset-password'>
             <div className="forget-password-form-inputs">
             {Codegenerated ? (<> <div className="forget-password-form-input">  <Inputs 
        labelName="Code" 
        type="text" 
        name="dob" 
        onChange={handleChange} 
        placeholder="Enter 4 pin code" 
      />
    </div>

      <button type="submit" className='forget-password-form-submit'>
        Reset Password
      </button>
    
  </>
) : null}

   
          </div>
            
             </form>
    </div>
  )
}
