import React, {useState} from 'react';
import {Inputs} from "../component/Inputs";
import "../styles/bookingOnlineStyling/BookingOnline.css";
import "../styles/forgetCredential/forgetCredential.scss";
import {NavLink} from "react-router-dom"
import { Alert } from '../component/Alert';
import { useHandleChange } from '../component/useHandleChange';
import { UseHandleFormsSubmits } from "../component/UseHandleFormsSubmits";




export const ForgetCredential = () => {
  const { inputs, handleChange } = useHandleChange();
  const {submitHandler,setAllInputValueEmpty, setSomeInputValueEmpty, missingValue, setDob} = UseHandleFormsSubmits();

  const requiredInputField = ["email", "dob"];
  const [Codegenerated, setGenerated] = useState(false);

  return (
    <div className='forget-credential'>
      <h1> Reset your password </h1>
        <form className='form-authenticate-user-reset-password' onSubmit={(e) => submitHandler(e, inputs, requiredInputField) }>
        <div className="forget-password-form-inputs">
        <Alert setAllInputValueEmpty={setAllInputValueEmpty}  setSomeInputValueEmpty={setSomeInputValueEmpty}  missingValue={missingValue} setDob={setDob}/>
         <div className="forget-password-form-input">
          <Inputs labelName={"Email"} type={"text"} name={"email"} onChange={handleChange} placeholder={"Email or Phone number"} />
        </div> 
          <div className="forget-password-form-input">
          <Inputs labelName={"Dob"} type={"text"} name={"dob"} onChange={handleChange} placeholder={"Date of birth 01/01/1999"} />
          </div>
          <p>Go back to login page <NavLink to="/PatientAuthenticationPortal"> click here</NavLink> </p>
          <button className='forget-password-form-submit' > Submit </button>
        
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
