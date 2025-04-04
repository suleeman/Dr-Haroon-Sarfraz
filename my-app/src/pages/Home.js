import React from 'react'

import { Footer } from "../component/footer";
import {Tcard} from "../component/T-card";
import {HomeDisplay} from "../component/HomeDisplay";
import {Header} from "../component/header";


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