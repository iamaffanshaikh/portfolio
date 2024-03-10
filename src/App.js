import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Namelabel from "./components/name_label/Namelabel"
import About from "../src/components/about/About"

const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Namelabel/>
      <About/>
    </>
  )
}

export default App