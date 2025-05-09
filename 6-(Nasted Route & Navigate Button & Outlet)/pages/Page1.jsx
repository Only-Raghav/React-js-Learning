import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Page1() {
  return (
    <div>

        <h1>HTML</h1>
        <p>Hyper Text Markup Language</p>
        &nbsp;
        <NavLink to="tab1">Tab 1</NavLink>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <NavLink to="tab2">Tab 2</NavLink>
        <Outlet/>


      
    </div>
  )
}

export default Page1
