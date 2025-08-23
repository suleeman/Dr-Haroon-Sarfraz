import React from "react";
import "./styles/appStyling/App.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import { Layout } from "./pages/Layout";
import {Treatments} from "./pages/Treatments";
import {PatientPortal} from "./pages/PatientPortal";
import {NoPage} from "./pages/NoPage";
import {MyTeam}   from './pages/MyTeam';
import {BookingOnline} from "./pages/BookingOnline";
import {ForgetCredential} from "./pages/ForgetCredential"
import {PatientAuthenticationPortal} from "./pages/PatientAuthenticationPortal";
import {BookingSuccessful} from "./pages/BookingSuccessful";
import {Header} from "./component/header";



import { Footer } from "./component/footer";
export default function App() {
  return (
        <div style={{ padding: 20, backgroundColor: '#f0f0f0', color: '#333' }}>
      <h1>Hello React is working!</h1>
    </div>
   
  // <BrowserRouter>
  //     <div className="App">
  //       <Header />
  //       <Routes>
  //         <Route index element={<Home />} />
  //         <Route path="myteam" element={<MyTeam />} />
  //         <Route path="treatments" element={<Treatments />} />
  //         <Route path="patientportal" element={<PatientPortal />} />
  //         <Route path="bookingonline" element={<BookingOnline />} />
  //         <Route path="forgetcredential" element={<ForgetCredential />} />
  //         <Route path="PatientAuthenticationPortal" element={<PatientAuthenticationPortal />} />
  //         <Route path="bookingSuccessful" element={<BookingSuccessful />} />
  //         <Route path="*" element={<NoPage />} />
  //       </Routes>
  //       <Footer />
  //     </div>
  //   </BrowserRouter>

  );
}
