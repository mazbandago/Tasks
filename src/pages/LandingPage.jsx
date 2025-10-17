import React from 'react'
import Navbar from '../components/Navbar';
import Clock from '../components/Clock';


function LandingPage() {
  return (
    <div className=' mx-auto min-h-screen'>
    <Navbar />
    <Clock />
    </div>
  )
}

export default LandingPage;