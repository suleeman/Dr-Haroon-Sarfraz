import React from 'react';
import {Inputs} from "./Inputs"

export  const PatientAuthentication = (inputs, handleInputChanges) => {

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        inputs((values) => ({ ...values, [name]: value }));
      };
  return (
    <div className='sign-on'>
        <div className='sub-sign-on'> 
        <h1> Patient Portal</h1>

        </div>
    </div>
  )
}

