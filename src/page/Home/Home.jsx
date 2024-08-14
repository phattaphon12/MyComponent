import React from 'react'
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <li><NavLink to='otp'>OTP</NavLink></li>
      <li><NavLink to='inputPhoneNumber'>Input Phone Number</NavLink></li>
      <li><NavLink to='multiStepForm'>Multi Step Form</NavLink></li>
    </div>
  )
}

export default Home
