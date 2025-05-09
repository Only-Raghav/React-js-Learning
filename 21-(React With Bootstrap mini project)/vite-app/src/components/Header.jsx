import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <Link className="navbar-brand" to="/">GenZe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/page1">Page 1</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/page2">Page 2</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/page3">Page 3</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/page4">Page 4</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/page5">Page 5</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/login" aria-disabled="true">login/Registration</NavLink>
        </li>
      </ul>

      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

    </div>
  </div>
</nav>
      
    </>
  )
}

export default Header
