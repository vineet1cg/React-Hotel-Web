import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Catagory from './components/Catagorybar/Catagory'
export default function App() {
  return(
    <main>
      <Navbar/>
      <Catagory/>
    </main>
  )
}
