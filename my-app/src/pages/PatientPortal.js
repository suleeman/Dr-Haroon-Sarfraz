import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Inputs} from '../component/Inputs';
import patients from "../localData/patients.json";
import "../styles/patientPortal/patientPortal.scss";
import "../styles/bookingOnlineStyling/BookingOnline.scss";


import { PatientAuthenticationPortal } from './PatientAuthenticationPortal';
 export const PatientPortal = () => {

  const [loggedIn, setLoggedIn] = useState(true)
  const [clickedItem, setClickedItem] = useState({
    profile: true, appointment: false, newAppointment: false, logOut: false
  })
  const{profile, appointment} = clickedItem;

  const navigate = useNavigate();
  const {firstName, lastName, dob, phone} = patients[0];

  const handleMenuBar = (e) => {
    console.log(e.target.innerText);
    if(  e.target.innerText === "Profile" ){
      setClickedItem( prev => ({
        ...prev, profile: true, appointment: false
      }))
    } else if(e.target.innerText === "Appointments") {
      setClickedItem( prev => ({
        ...prev, appointment: true, profile: false
      }))
    } else if(e.target.innerText === "Book new appointment") {
      navigate("/bookingOnline")
    } else if (e.target.innerText === "Log out") {
      navigate("/")
    }
    
  }

    return (
    <> 

      {loggedIn? <>
      <div className='patient-portal'>
        <div className='patient-portal-left-menu'> 
        <ul className='patient-portal-left-menu-list'>
          <li onClick={handleMenuBar}>Profile</li>
          <li onClick={handleMenuBar}>Appointments</li>
          <li onClick={handleMenuBar}>Book new appointment</li>
          <li onClick={handleMenuBar}>Log out</li>
          </ul>
          </div>
        <div className='patient-portal-right-menu'>
          {profile ? <div className='form'> 
          <div className='booking-form-inputs profile-details'>


         <div className='booking-form-input'> 
         <Inputs labelName = "First name"type="text" value={firstName} disabled= "disabled" />  
          </div>
          <div className='  booking-form-input'>     
             <Inputs labelName= "Last name" type="text" value={lastName} disabled= "disabled" /> 
           </div>
         <div className='  booking-form-input'>  
              <Inputs labelName= "Dob" type="text" value={dob} disabled= "disabled" />  
          </div>
         <div className='   booking-form-input'>   
              <Inputs labelName= "Phone" type="text" value={phone} disabled= "disabled" /> 
           </div>
          
          <button className='booking-form-submit'> Edit</button>
          <button className='booking-form-submit'> Submit </button>
       
          </div>

          </div> :""}
          {appointment?  <div className='appointment-details'> 
          <div className='appointments'> <span>Date: 25/1/25   <br/><br/> </span>Treatment Type: Scaling and Cleaning</div>
          <h3> Treatment Provided </h3>
          <textarea type="text" value="" disbaled={true}  rows={10} cols={40}> </textarea> <br/> <br/> <br/>
          <a href="" target="_blank" rel="noopener noreferrer">
           View or Download File
            </a>
  
           
          </div>: ""}

           </div>
         </div>
      
      
      </>: <PatientAuthenticationPortal />}


   
      </>
    )
  }

export default PatientPortal