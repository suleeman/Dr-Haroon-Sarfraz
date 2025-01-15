import React from "react";
import "./styles/App.scss"
import { Header } from "./component/Header";
import { Tcard } from "./component/T-card";
import { Footer }  from "./component/Footer";
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
