import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

function Section() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/page1' element={<h1>Welcome to boot 1</h1>}></Route>
        <Route path='/page2' element={<h1>Welcome to boot 2</h1>}></Route>
        <Route path='/page3' element={<h1>Welcome to boot 3</h1>}></Route>
        <Route path='/page4' element={<h1>Welcome to boot 4</h1>}></Route>
        <Route path='/page5' element={<h1>Welcome to boot 5</h1>}></Route>
        <Route path='/login' element={<h1>Welcome to login page</h1>}></Route>

      </Routes>
    </>
  )
}

export default Section

