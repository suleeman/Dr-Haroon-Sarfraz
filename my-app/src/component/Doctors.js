import React from 'react';
import DoctorsInfo from "../localData/DoctorsInfo.json";
import "../styles/Doctors.scss";

import { useRef } from 'react';

export const Doctors = () => {

    const doctorNames = useRef(0);


    const handleClickForInfo = (e) => {
        e.preventDefault();
        console.log(e.target.doctorNames.current.innerHTML);
        if (e.target.innerHTML == 'DrHaroonSarfraz') {
            console.log("gi");
        } else if (e.target.innerHTML == "Dr Ali Tiwana") {
            console.log("Dr Ali Tiwana");
        } else if (e.target.innerHTML == "Dr Zeeshan Sandhu") {
            console.log("Dr Zeeshan Sandhu");
        } else if (e.target.innerHTML ==="Dr Poppo Poppo") {
            console.log("Dr Poppo Poppo");
        } else{
          
        }
        
    }

  return (
    <div className='doctors-info'>
        <img className='doctors-info-img' src='/images/myteam.jpeg'/>
        <div className='doctors-info-sub'> 
        <div className='doctors-info-names'> 
        {DoctorsInfo.map((doctor, i) => {
            return <> 
                  <ul> 
                    <li key={i} ref={doctorNames} onClick={handleClickForInfo} className='doctors-info-name'> {doctor.name}</li>
                </ul>
            
             </>
        })}  
        </div>
        <div className='doctors-info-description'>
        {DoctorsInfo.map((doctor, i) => {
            return <> 

             <p key={i}> {doctor.info}</p>
             </>
        })}
        </div>


        </div>

    </div>
  )
}
