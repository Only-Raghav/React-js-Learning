import React from 'react'
import { NavLink } from 'react-router-dom'

function Page2() {
  return (
    <div>
        <h1>CSS</h1>
        <p>Casecading Style Sheet</p>
        &nbsp;
        <NavLink to="tab3">Tab 3</NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="tab4">Tab 4</NavLink>
      
    </div>
  )
}

export default Page2
