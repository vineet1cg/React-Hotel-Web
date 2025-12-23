import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Catagory from './components/Catagorybar/Catagory'
import Hero from './components/Hero/Hero'
import Hotel from './components/Hotel/Hotel'
export default function App() {
  return(
    <main>
      <Navbar/>
      <Catagory/>
      <Hero/>
      <Hotel/>
    </main>
  )
}
