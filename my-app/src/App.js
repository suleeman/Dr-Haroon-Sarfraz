import React from "react";
import "./styles/App.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import { Layout } from "./pages/Layout";
import {Treatments} from "./pages/Treatments";
import {PatientPortal} from "./pages/PatientPortal";
import {NoPage} from "./pages/NoPage";
import {MyTeam}   from './pages/MyTeam';


export default function App() {
  return (
    <div className="App">

      <BrowserRouter>
       <Routes> 

          <Route index element={ <Home />} />
          <Route path="MyTeam" element={< MyTeam/>} />
          <Route path="Treatments" element={<Treatments />} />
          <Route path="PatientPortal" element={<PatientPortal />} />
          <Route path="*" element={<NoPage />} />
       

        </Routes>
       </BrowserRouter>
    </div>
  );
}
