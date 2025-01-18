import React from 'react'

import {Footer} from "../component/Footer";
import {Tcard} from "../component/T-card";
import {HomeDisplay} from "../component/HomeDisplay";
import {Header} from "../component/Header";


export const Home = () => {
  return (<>
    <Header />
    <HomeDisplay />
    <Tcard/>
    <Footer />
    </>
  )
}

export default Home