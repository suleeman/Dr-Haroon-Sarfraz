import React, { useState } from 'react';
import { BookingOnline } from '../pages/BookingOnline';
import { PatientAuthenticationPortal } from "../component/PatientAuthenticationPortal";

export const HandleChange = () => {
  // Ensure the state is initialized as an empty object
  const [inputs, setInputs] = useState({

  });

  // This function will be called when a field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value  
    }));
  };

  return (
    <div>
      <BookingOnline handlechange={handleChange} inputs={inputs} />
      <PatientAuthenticationPortal handlechange={handleChange} inputs={inputs} m={m}/>
    </div>
  );
};
