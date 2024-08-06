import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import MainComponent from './MainComponent/MainComponent'
import AllRoutes from './Component/AllRoutes'
import Footer from './Component/Footer'



function App() {
  

  return (
    <>
      <Navbar/>
      <br />
      <br />
    <AllRoutes/>
    <Footer/>
    </>
    
    
  )
}

export default App
