import React from 'react'
import "./Section.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Insert from './Insert'
import View from './View'
import Spv from './Spv'
import Update from './Update'
import Delete from './Delete'


function Section() {
  return (
    <div className='section'>
        <Routes>

          <Route path='/' element={<Home/>}></Route>

          <Route path='insert' element={<Insert/>}></Route>

          <Route path='view' element={<View/>}></Route>

          <Route path='spv/:id' element={<Spv/>}></Route>

          <Route path='update/:id' element={<Update/>}></Route>

          <Route path='delete/:id' element={<Delete/>}></Route>




        </Routes>
      
    </div>
  )
}

export default Section
