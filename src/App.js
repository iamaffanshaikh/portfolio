import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Namelabel from "./components/name_label/Namelabel"
import About from "../src/components/about/About.jsx"
import Designations from './components/designations/Designations.jsx'
import '../src/App.css'

const App = () => {
  return (
    <>
    <div className='main'>

      <Navbar/>
      <Header/>
      <Namelabel/>
      <About/>
      <Designations/>

    </div>
    </>
  )
}

export default App