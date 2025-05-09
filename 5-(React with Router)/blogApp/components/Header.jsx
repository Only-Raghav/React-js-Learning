import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header(props) {

    
//   const navs =[
//     {
//       id: 1,
//       url: "./page1",
//       urlName: "Page One"
//     },
//     {
//       id: 2,
//       url: "./page2",
//       urlName: "Page Two"
//     },
//     {
//       id: 3,
//       url: "./page3",
//       urlName: "Page Three"
//     },
//     {
//       id: 4,
//       url: "./page4",
//       urlName: "Page Four"
//     },
//     {
//       id: 5,
//       url: "./page5",
//       urlName: "Page Five"
//     }
//   ]

//   const list = navs.map(nav=><li key={nav.id}><a href={nav.url}/>{nav.urlName}</li>)


  return (
    <>
    {props.children}
    <header className='head'>
      <Link to='/' className='title'>blog.com</Link>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to='/page1'>Page One</NavLink></li>
        <li><NavLink to='/page2'>Page Two</NavLink></li>
        <li><NavLink to='/page3'>Page Three</NavLink></li>
        <li><NavLink to='/page4'>Page Four</NavLink></li>
      </ul>
    </header>
    </>
   
  )
}

export default Header
