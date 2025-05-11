import { useEffect } from "react";
import React from 'react';
import { Inputs } from "../component/Inputs";
import { useHandleChange } from '../component/useHandleChange';
import { UseHandleFormsSubmits } from "../component/UseHandleFormsSubmits";
import {Alert} from "../component/Alert"
import "../styles/bookingOnlineStyling/BookingOnline.scss";


export function BookingOnline() {
  const requiredInputField = ["firstname", "lastname", "dob", "phone", "treatmentType"];
  const { inputs, handleChange } = useHandleChange();
  const {submitHandler,setAllInputValueEmpty, setSomeInputValueEmpty, missingValue, setDob} = UseHandleFormsSubmits();

  useEffect(() => {
 console.log(inputs);
  }, [inputs,setAllInputValueEmpty, setSomeInputValueEmpty]);





  return (
    <div className="form">
      <h1 className="booking-form-heading">Book the Appointment</h1>
      <div className="booking-form-div">
        <form className="booking-form-inputs" onSubmit={(e) => submitHandler(e, inputs, requiredInputField)}>
        <Alert setAllInputValueEmpty={setAllInputValueEmpty}  setSomeInputValueEmpty={setSomeInputValueEmpty}  missingValue={missingValue} setDob={setDob}/>
          <div className="booking-form-input">
            <Inputs labelName="Firstname" type="text" name="firstname" onChange={handleChange} />
          </div>

          <div className="booking-form-input">
            <Inputs labelName="Lastname" type="text" name="lastname" onChange={handleChange} />
          </div>

          <div className="booking-form-input">
            <label>Treatments</label>
            <select name="treatmentType" onChange={handleChange}>
              <option value="">Select one</option>
              <option value="Root Canal Treatment">Root Canal</option>
              <option value="Scaling and Polishing">Scaling and Polishing</option>
              <option value="Teeth Whitening">Teeth Whitening</option>
            </select>
          </div>

          <div className="booking-form-input">
            <Inputs labelName="DOB" type="text" name="dob" onChange={handleChange} placeholder="01/01/1998" />
          </div>

          <div className="booking-form-input">
            <Inputs labelName="Phone" type="text" name="phone" onChange={handleChange} placeholder="Phone number" />
          </div>

          <button className="booking-form-submit" type="submit" >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
