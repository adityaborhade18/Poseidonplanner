import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footr'
import Homepage from './pages/homepage'
import AboutAdvisor from './pages/AboutAdvisor'
import AboutUS from './pages/AboutUS'
import TC from './pages/TC'
import ContactUs from './pages/ContactUs'
import {BrowserRouter} from 'react-router-dom';

function App() {
 

  return (
    <>
    <BrowserRouter>
       <Navbar/> 
       <Homepage/>
       <AboutAdvisor/>
       <AboutUS/>
       <TC/>
       <ContactUs/>
       <Footer/>
       
    </BrowserRouter>
   
    </>
  )
}

export default App
