import React from 'react';

import {Outlet, Link} from "react-router-dom";

export const Layout = () => {
  return ( <> 

    <nav>
    <ul>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/MyTeam"> My Team</Link>
      </li>
      <li>
        <Link to="/Treatments"> Treatments</Link>
      </li>
      <li>
        <Link to="/patientPortal"> Patient Portal</Link>
      </li>
            <li>
        <Link to="/BookingSuccessful">Booking Successful</Link>
      </li>
            <li>
        <Link to="/PatientAuthenticationPortal">PatientAuthenticationPortal</Link>
      </li>
    </ul>
  </nav>
    
    
    
     <Outlet/>
     </>
  )
}
