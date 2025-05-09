import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>

        <ul className='header'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/insert">insert data</NavLink></li>
            <li><NavLink to="/update">update data</NavLink></li>
            <li><NavLink to="/read">read data</NavLink></li>
            <li><NavLink to="/delete">delete data</NavLink></li>

        </ul>
      
    </div>
  )
}

export default Header
