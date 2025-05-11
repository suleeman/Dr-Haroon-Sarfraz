
import { BookingOnline } from '../pages/BookingOnline';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HandleChange } from './useHandleChange';
import {Alert} from "../component/Alert";

export const UseHandleFormsSubmits = () => {


// -------------------------------------------------------Variables Initilizations-------------------------------------------------------------------------
  
let [formValidation, setFormValidation] = useState({setAllInputValueEmpty : false, setSomeInputValueEmpty : false, setDob : false, setPhone: false
}); 
const navigate = useNavigate();
const [missingValue, setMissingValue] = useState([]); 
const {setAllInputValueEmpty, setSomeInputValueEmpty, setDob} = formValidation







// --------------------------------------------------------Function  Initilizations------------------------------------------------------------------------------
   
  const submitHandler = (e,inputs, requiredInputField) => {
    e.preventDefault();
   
    
// -----------------------------------------------------------C----------------------------------------------------------------------------

   

    let inputFieldNullChecking = Object.keys(inputs);  // Get keys of the inputs object
   
    if (inputFieldNullChecking.length === 0) {
      setFormValidation( prev => ({
        ...prev, setAllInputValueEmpty : true

      }));
      
      setTimeout(() => {
         setFormValidation( prev => ({
          ...prev,  setAllInputValueEmpty : false
        })); 
      }, 2000) 
   
      return  
    }
   



// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

   
let missingFields = [];  // Initialize an array for missing fields
   
// Check for missing fields
for (let index = 0; index < requiredInputField.length; index++) {
  if (!inputFieldNullChecking.includes(requiredInputField[index])) {
    missingFields.push(requiredInputField[index]);
  }

}

// If there are missing fields, update missing value
if (missingFields.length > 0) {
  setMissingValue(missingFields);  // Update missing fields state
  setFormValidation( prev => ({
    ...prev, setSomeInputValueEmpty : true
  })); 
  setTimeout(() => {
    setFormValidation( prev => ({
      ...prev, setSomeInputValueEmpty : false
    })); 
    setMissingValue([]); 
  }, 2000);
  return
} 

   
  
  
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------

   
  
   // DOB pattern verification
  
   const dobPattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!dobPattern.test(inputs.dob)) {
     setFormValidation( prev => ({
        ...prev, setDob : true
      }));
      setTimeout(() => {
        setFormValidation( prev => ({
          ...prev, setDob : false
        }));
      }, 2000);
  return
    } 
    



console.log("1");


console.log("2");
    
   // ---------------------------------------------------------------------------------------------------------------------------------------------------------------

   
   
   
   // phone pattern verification
  //  const phonePattern = /^\+?[1-9][0-9]{0,2}[-.\s]?\(?[0-9]{1,4}?\)?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/;

  //  if (!phonePattern.test(inputs.phone || "")) {
  //     setFormValidation( prev => ({
  //      ...prev, setPhone : true
  //    }));
  //    setFormValidation( prev => ({
  //      ...prev, setPhone : false
  //    }));
  //    return
  //  } 






   console.log("3");
   navigate("/");
 
}  





  
  
  

   
   
   
   
   
   


 
      
  return {submitHandler, setAllInputValueEmpty, setSomeInputValueEmpty, missingValue, setDob}
}


