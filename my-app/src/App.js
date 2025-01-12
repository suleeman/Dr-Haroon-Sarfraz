import React from "react";
import "./styles/App.scss"
import { Header } from "./component/Header";
import {Footer}  from "./component/Footer";
import { Tcard } from "./component/T-card";

function App() {
  return (
    <div className="App">
       <Header />
       <Tcard/>
       <Footer />
    </div>
  );
}

export default App;
