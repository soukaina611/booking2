import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='nav-container'>
          <span className='logo'>Booking.com</span>
          <div className='items'>
            <button className='btn-register'>Register</button>
            <button className='btn-login'>Sign in</button></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
