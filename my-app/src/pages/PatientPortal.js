import React from 'react'
import {Header} from "../component/header";
import { Footer } from "../component/footer";
import { PatientAuthenticationPortal } from '../component/PatientAuthenticationPortal';
 export const PatientPortal = () => {


    return (
    <> 
      <Header />
      <PatientAuthenticationPortal />
      <Footer />
      </>
    )
  }

export default PatientPortal