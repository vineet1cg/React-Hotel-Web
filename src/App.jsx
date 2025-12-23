import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Catagory from './components/Catagorybar/Catagory'
import Hero from './components/Hero/Hero'
export default function App() {
  return(
    <main>
      <Navbar/>
      <Catagory/>
      <Hero/>
    </main>
  )
}
