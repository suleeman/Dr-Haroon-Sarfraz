import React, { useState } from 'react';
import { Inputs } from "../component/Inputs";
import "../styles/BookingOnline.scss";
import { useNavigate } from 'react-router-dom';
import { Error } from '../component/Error';




export const BookingOnline = ({...props}) => {

  const [inputs, setInputs] = useState({});
  let [inputValue, setinputValue] = useState(false);
  let [isLimitOver, setIsLimitOver] = useState(false);
  const [dob,setDob] = useState(true);
  const [missingValue, setMissingValue] = useState([]);  // Track missing fields
  const navigate = useNavigate();
  const inputFieldMissing = ["Firstname", "Lastname", "DOB", "Phone", "treatmentType"];

  

 
 
 
 
 
 
  // This function will be called when a field changes
  const handlechange = (event) => {
  
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value  
    }));
  };



 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs.DOB);
    if (inputs.DOB) {
   
      const dobPattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!dobPattern.test(inputs.DOB)) {
      setDob(false);
      return
    } else {
      setDob(true);
    }
    }

    let objectarray1 = Object.keys(inputs);  // Get keys of the inputs object
    let missingFields = [];  // Initialize an array for missing fields
   

    if (objectarray1 === 0) {
      setinputValue(true);
      setTimeout(() => {
        setinputValue(false);
      }, 2000);
    } else {
      // Check for missing fields
      for (let index = 0; index < inputFieldMissing.length; index++) {
        if (!objectarray1.includes(inputFieldMissing[index])) {
          missingFields.push(inputFieldMissing[index]);
        }
      }

      // If there are missing fields, update missing value
      if (missingFields.length > 0) {
        setMissingValue(missingFields);  // Update missing fields state
        setIsLimitOver(true);
        setTimeout(() => {
          setIsLimitOver(false);
        }, 2000);
      } else {
        // If no fields are missing, navigate to the next page
        setMissingValue([]);  // Clear missing fields state when validation is successful
        navigate("/");
      }
    }
  };

 // Log the missing fields

  return (
    <>

 
      <div className="form">
        <h1 className="booking-form-heading">Book the Appointment</h1>
        <div className="booking-form-div">
          <form className="booking-form-inputs">
            {
              inputValue
                ? <Error className="booking-form-error" message={"Please fill the details correctly "} />
                : <Error className="booking-form-error-hide" message={""} />
            }
            {!dob ? <Error className="booking-form-error" message={"Please fill the DOB details 11/11/1990 pattern "} />
                : <Error className="booking-form-error-hide" message={""} />
            } 
            {
              isLimitOver
                ? <Error className="booking-form-error" message={`${missingValue.join(", ")} are missing`} />
                : <Error className="booking-form-error-hide" message={""} />
            }

            <div className="booking-form-input">
              <Inputs labelName={"Firstname"} type={"text"} name={"Firstname"} onChange={handlechange} />
            </div>
            <div className="booking-form-input">
              <Inputs labelName={"Lastname"} type={"text"} name={"Lastname"} onChange={handlechange} />
            </div>
            <div className="booking-form-input">
              <label>Treatments</label>
              <select name="treatmentType" onChange={handlechange}>
              <option value=""></option>
  
                <option value="Root Canal Treatment ">Root canal</option>
                <option value="Scaling and Polishing">Dentures</option>
                <option value="Teeth Whitening">Teeth Cleaning and Whitening Solutions</option>
                <option value="Composite Restoration">Composite Restoration</option>
                <option value="Wisdom Tooth Extraction">Wisdom Tooth Extraction</option>
                <option value="Baby Tooth Extraction and Fillings">Teeth Cleaning and Whitening Solutions</option>
                <option value="Bone and Tissue Grafts">Bone and Tissue Grafts</option>
                <option value="Dental Implants">Dental Implants</option>
                <option value="Dentures">Dentures</option>
                <option value="Clear Aligners">Clear Aligners</option>
                <option value="Veneers">Veneers</option>
                <option value="Smile Makeovers">Smile Makeovers</option>
              </select>
            </div>
            <div className="booking-form-input">
              <Inputs labelName={"DOB"} type={"text"} name={"DOB"} onChange={handlechange} placeholder={"01/01/1998"} />
            </div>
            <div className="booking-form-input">
              <Inputs labelName={"Phone"} type={"text"} name={"Phone"} onChange={handlechange} placeholder={"Phone number"} pattern={"^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$"}/>
            </div>
            <button onClick={handleSubmit} className="booking-form-submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
