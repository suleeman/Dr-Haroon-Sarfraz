import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Inputs } from '../component/Inputs';
import patients from "../localData/patients.json";
import "../styles/patientPortal/patientPortal.scss";
import "../styles/bookingOnlineStyling/BookingOnline.scss";


import { PatientAuthenticationPortal } from './PatientAuthenticationPortal';
export const PatientPortal = () => {

  const [loggedIn, setLoggedIn] = useState(true)
  const [openAccordian, setOpenAccordian] = useState(false);
  const [clickedItem, setClickedItem] = useState({
    profile: true, appointment: false, newAppointment: false, logOut: false
  })
  const { profile, Reports } = clickedItem;

  const navigate = useNavigate();
  const { firstName, lastName, dob, phone } = patients[0];

  const handleMenuBar = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === "Profile") {
      setClickedItem(prev => ({
        ...prev, profile: true, Reports: false
      }))
    } else if (e.target.innerText === "Reports") {
      setClickedItem(prev => ({
        ...prev, Reports: true, profile: false
      }))
    } else if (e.target.innerText === "Book new appointment") {
      navigate("/bookingOnline")
    } else if (e.target.innerText === "Log out") {
      navigate("/")
    }

  }

  const handleAccordion = (e) => {
    setOpenAccordian(!openAccordian)
  }

  return (
    <>

      {loggedIn ? <>
        <div className='patient-portal'>
          <div className='patient-portal-left-menu'>
            <ul className='patient-portal-left-menu-list'>
              <li onClick={handleMenuBar}>Profile</li>
              <li onClick={handleMenuBar}>Reports</li>
              <li onClick={handleMenuBar}>Book new appointment</li>
              <li onClick={handleMenuBar}>Log out</li>
            </ul>
          </div>
          <div className='patient-portal-right-menu'>
            {profile ? <div className='form'>
              <div className='booking-form-inputs profile-details'>


                <div className='booking-form-input'>
                  <Inputs labelName="First name" type="text" value={firstName} disabled="disabled" />
                </div>
                <div className='  booking-form-input'>
                  <Inputs labelName="Last name" type="text" value={lastName} disabled="disabled" />
                </div>
                <div className='  booking-form-input'>
                  <Inputs labelName="Dob" type="text" value={dob} disabled="disabled" />
                </div>
                <div className='   booking-form-input'>
                  <Inputs labelName="Phone" type="text" value={phone} disabled="disabled" />
                </div>

                <button className='booking-form-submit'> Edit</button>
                <button className='booking-form-submit'> Submit </button>

              </div>

            </div> : ""}
            {Reports ?
              <div className='appointment-details'>
                <div onClick={handleAccordion} className='appointments' style={{ cursor: 'pointer' }}> <div className='date'> <p>Date: 25/1/25  </p> <p>v</p></div>  <div className='treatmentType'> Treatment Type: Scaling and Cleaning</div> </div>

  <div className={openAccordian ? "show-appointment-details" : "hide-appointment-details"}>
    <h3>Treatment Provided</h3>

    <div className="textarea">
      <textarea disabled={true} rows={10} cols={40}></textarea>
    </div>
    <br />

    <h3>Medical Reports</h3>
    <a href="#" target="_blank" rel="noopener noreferrer">
      Xray Report
    </a>
  </div>


              </div> : ""}

          </div>
        </div>


      </> : <PatientAuthenticationPortal />}



    </>
  )
}

export default PatientPortal