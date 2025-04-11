import React from "react";
import "./styles/App.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import { Layout } from "./pages/Layout";
import {Treatments} from "./pages/Treatments";
import {PatientPortal} from "./pages/PatientPortal";
import {NoPage} from "./pages/NoPage";
import {MyTeam}   from './pages/MyTeam';
import {BookingOnline} from "./pages/BookingOnline";
import {ForgetCredential} from "./pages/ForgetCredential"
import {Header} from "../src/component/header";

import { Footer } from "../src/component/footer";
export default function App() {
  return (
   
<BrowserRouter>
  <div className="App">
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path="myteam" element={<MyTeam />} />
      <Route path="treatments" element={<Treatments />} />
      <Route path="patientportal" element={<PatientPortal />} />
      <Route path="bookingonline" element={<BookingOnline />} />
      <Route path="forgetcredential" element={<ForgetCredential />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
    <Footer />
  </div>
</BrowserRouter>

  );
}
