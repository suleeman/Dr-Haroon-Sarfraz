import React, {useState} from 'react';
import { BookingOnline } from '../pages/BookingOnline';
import {PatientAuthentication} from "../component/PatientAuthentication"

export const HandleChange = (event) => {
    const [inputs, setInputs] = useState({});

    const handleInputChanges = () => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    }



  return (
    <div>
    <BookingOnline inputs={inputs} handleInputChanges={handleInputChanges}/>
    <PatientAuthentication inputs={inputs} handleInputChanges={handleInputChanges}/>
    </div>

  )
}

