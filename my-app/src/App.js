import React from "react";
import "./styles/App.scss"
import { Header } from "./component/Header";
import {Footer}  from "./component/Footer"

function App() {
  return (
    <div className="App">
       <Header />
       <Footer />
    </div>
  );
}

export default App;
