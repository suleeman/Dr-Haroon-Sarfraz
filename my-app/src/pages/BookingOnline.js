import React, {  useState } from 'react';
import {Inputs} from "../component/Inputs";
import "../styles/BookingOnline.scss";
import { useNavigate } from 'react-router-dom';

export const BookingOnline = () => {

  const [inputs, setInputs] = useState({});
    
   const navigate = useNavigate();

 
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
      }
     


    const handleSubmit = (e) => {
       
        e.preventDefault();
        console.log(inputs.Firstname,inputs.Lastname, inputs.DOB, inputs.Phone);
        if (inputs.Firstname === "" || inputs.Lastname === "" || inputs.DOB === "" || inputs.Phone=== "" ) {
            console.log("values are missed");

        }

        // navigate("/");
    }


    return <> 
     <div className='booking-form'>
         <h1 className='booking-form-heading'> Book the Appointment</h1>
         <div className='bookin-form-div'>
         <form onSubmit={handleSubmit} className='blooking-form-inputs'> 
               
         <div className='blooking-form-input'>   <Inputs  labelName={"Firstname"} type={"text"} name={"Firstname"} onChange={handleChange } required={"required"}/></div>
         <div className='blooking-form-input'>  <Inputs labelName={"Lastname"} type={"text"}  name={"Lastname"}onChange={handleChange }required={"required"} /></div>
         <div className='blooking-form-input'>  <Inputs labelName={"DOB"} type={"number"} name={"DOB"} onChange={handleChange } required={"required"} maxLength={1} /></div>
         <div className='blooking-form-input'>   <Inputs labelName={"Phone"} type={"number"}  name={"Phone"}onChange={handleChange } required={"required"} maxLength={1}/></div>
       
         <button  className= "booking-form-submit " type='submit'> Submit </button>
         </form>
         </div>

   




    
        </div>
   
     
    </>

}

