import React, { useState } from 'react';
import DoctorsInfo from "../localData/DoctorsInfo.json";
import "../styles/Doctors.scss";

export const Doctors = () => {
  // State for the doctor that was clicked
  const [whoClicked, setWhoClicked] = useState("Dr Haroon Sarfraz");

  // Handle doctor click
  const handleClickForInfo = (e) => {
    e.preventDefault();
    setWhoClicked(e.target.innerHTML);  // Update the clicked doctor's name
  };

  return (
    <div className='doctors-info'>
      <img className='doctors-info-img' src='/images/myteam.jpeg' alt="Doctors Team" />

      <div className='doctors-info-sub'>
        <div className='doctors-info-names'>
          {DoctorsInfo.map((doctor, i) => (
            <ul key={i}>
              <li onClick={handleClickForInfo} className='doctors-info-name'>
                {doctor.name}
              </li>
            </ul>
          ))}
        </div>

        <div className='doctors-info-description'>
          {/* Filter doctors based on the clicked name and map to display details */}
          {DoctorsInfo
            .filter((doctor) => doctor.name === whoClicked)
            .map((doctor, i) => (
              <div className= "doctors-details" key={i}> {/* Key applied to the outermost element */}
                <img className= "doctors-photo" src={doctor.img} alt={doctor.name} />
                <p className= "doctors-description">{doctor.info}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
