import React from 'react'
import { NavLink } from 'react-router-dom'

function Page3() {
  return (
    <div>
      <h1>JS</h1>
      <p>Java Script</p>
      &nbsp;
      <NavLink to="tab5">Tab 5</NavLink>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to="tab6">Tab 6</NavLink>

    </div>
  )
}

export default Page3
