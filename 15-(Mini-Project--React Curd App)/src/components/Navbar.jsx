import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav'>
        <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='insert'>Add Data</NavLink>
        <NavLink to='view'>View Data</NavLink>
        </div>
        
    </div>
  )
}

export default Navbar
