import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Catagory from './components/Catagorybar/Catagory'
import Hero from './components/Hero/Hero'
import Hotel from './components/Hotel/Hotel'
import Footer from './components/Footer/Footer'
export default function App() {
  return(
    <main>
      <Navbar/>
      <Catagory/>
      <Hero/>
      <Hotel/>
      <Footer/>
    </main>
  )
}
