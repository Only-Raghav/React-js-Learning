import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Header() {

  const navigation = useNavigate()

  return (
    <>
    <header className='head'>
      <Link to='/' className='title'>Admin Panel</Link>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to='/page1'>HTML</NavLink></li>
        <li><NavLink to='/page2'>CSS</NavLink></li>
        <li><NavLink to='/page3'>JS</NavLink></li>
        <li><NavLink to='/page4'>JAVA</NavLink></li>
        <li><button onClick={()=> navigation('login')}>Login</button></li>
      </ul>
    </header>
    </>
   
  )
}

export default Header
