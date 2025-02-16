import React, {  useState } from 'react';
import {Inputs} from "../component/Inputs";
import "../styles/BookingOnline.scss";
import { useNavigate } from 'react-router-dom';
import { Error } from '../component/Error';

export const BookingOnline = () => {

  const [inputs, setInputs] = useState({});
  let [fill, setFill] = useState(false) 
  let [isLimitOver, setIsLimitOver] = useState(false)
   const navigate = useNavigate();

 
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}));

    
      }


     
      const handleSubmit = (e) => {
       
        e.preventDefault();
        
        if (!inputs.Firstname || !inputs.Lastname || !inputs.DOB || !inputs.Phone ) {
            setFill(true);
            setTimeout(() => {
                setFill(false);
            }, 2000);
        } else if (inputs.Firstname.length > 10 || inputs.Lastname.length > 10 || inputs.DOB.length > 6 || inputs.Phone.length > 11) {
            setIsLimitOver(true);
            setTimeout(() => {
                setIsLimitOver(false);
            }, 2000);
        } else {
      
            navigate("/")
        }

       
    }

 

    

    return <> 
     <div className='booking-form'>
         <h1 className='booking-form-heading'> Book the Appointment</h1>
         <div className='booking-form-div'>
         <form  className='blooking-form-inputs'> 
               {
                  fill?   <Error  className="booking-form-error" message={"Please fill all required fields"}/> : <Error  className="booking-form-error-hide" message={""}/>
                
                }
                 {
                   isLimitOver? <Error  className="booking-form-error" message={"Please use 11 digit for phone number "}/> : <Error  className="booking-form-error-hide" message={""}/>
                
                }
         <div className='blooking-form-input'>   <Inputs  labelName={"Firstname"} type={"text"} name={"Firstname"} onChange={handleChange } /></div>
         <div className='blooking-form-input'>  <Inputs labelName={"Lastname"} type={"text"}  name={"Lastname"}onChange={handleChange } /></div>
         <div className='blooking-form-input'>      <label>
      Treatments

    </label>       <select name="selectedFruit">
        <option value="apple">Root canal</option>
        <option value="banana">Dentures</option>
        <option value="orange">Teeth Cleaning and Whitening Solutions</option>
      </select></div>
         <div className='blooking-form-input'>  <Inputs labelName={"DOB"} type={"number"} name={"DOB"} onChange={handleChange } placeholder={"01/01/1998"}  /></div>
         <div className='blooking-form-input'>   <Inputs labelName={"Phone"} type={"number"}  name={"Phone"}onChange={handleChange } placeholder={"Phone number"} /></div>
       
         <button  onClick={handleSubmit} className= "booking-form-submit " type='submit'> Submit </button>
         </form>
         </div>

   




    
        </div>
   
     
    </>

}

