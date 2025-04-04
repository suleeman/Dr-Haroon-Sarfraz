import React, { useState } from 'react';
import { Inputs } from "../component/Inputs";
import "../styles/BookingOnline.scss";
import { useNavigate } from 'react-router-dom';
import { Error } from '../component/Error';



export const BookingOnline = ({inputs, HandleChange}) => {



  let [inputValue, setinputValue] = useState(false);
  let [isLimitOver, setIsLimitOver] = useState(false);
  const [missingValue, setMissingValue] = useState([]);  // Track missing fields
  const navigate = useNavigate();

  const inputFieldMissing = ["Firstname", "Lastname", "DOB", "Phone", "treatmentType"];

console.log( inputs, HandleChange );
  const handleSubmit = (e) => {
    e.preventDefault();
    let objectarray1 = Object.keys(inputs);  // Get keys of the inputs object
    let missingFields = [];  // Initialize an array for missing fields

    if (objectarray1.length === 0) {
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

  console.log(missingValue);  // Log the missing fields

  return (
    <>
      <div className="booking-form">
        <h1 className="booking-form-heading">Book the Appointment</h1>
        <div className="booking-form-div">
          <form className="blooking-form-inputs">
            {
              inputValue
                ? <Error className="booking-form-error" message={"Please fill the details correctly "} />
                : <Error className="booking-form-error-hide" message={""} />
            }
            {
              isLimitOver
                ? <Error className="booking-form-error" message={`${missingValue.join(", ")} are missing`} />
                : <Error className="booking-form-error-hide" message={""} />
            }

            <div className="blooking-form-input">
              <Inputs labelName={"Firstname"} type={"text"} name={"Firstname"} onChange={HandleChange} />
            </div>
            <div className="blooking-form-input">
              <Inputs labelName={"Lastname"} type={"text"} name={"Lastname"} onChange={HandleChange} />
            </div>
            <div className="blooking-form-input">
              <label>Treatments</label>
              <select name="treatmentType" onChange={HandleChange}>
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
            <div className="blooking-form-input">
              <Inputs labelName={"DOB"} type={"number"} name={"DOB"} onChange={HandleChange} placeholder={"01/01/1998"} />
            </div>
            <div className="blooking-form-input">
              <Inputs labelName={"Phone"} type={"number"} name={"Phone"} onChange={HandleChange} placeholder={"Phone number"} />
            </div>
            <button onClick={handleSubmit} className="booking-form-submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
