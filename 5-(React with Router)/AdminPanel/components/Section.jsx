import React from 'react'
import Data from './Data'
import { Route, Routes } from 'react-router-dom'

function Section() {
  return (
    <>
          <section className='text'>
      <Routes>
        <Route path='/' element={<Data title="Tech" data="All You Need To Know About Tech's"></Data>}></Route>
        <Route path='/page1' element={<Data title="HTML" data="Hyper Text Markup Language"></Data>}></Route>
        <Route path='/page2' element={<Data title="CSS" data="Casecading style sheet"></Data>}></Route>
        <Route path='/page3' element={<Data title="JS" data="JavaScript"></Data>}></Route>
        <Route path='/page4' element={<Data title="JAVA" data="Just Another Virtual Machine"></Data>}></Route>
        <Route path='*' element={<h1>page not found</h1>}></Route>
      </Routes>
    </section>
    </>
  )
}

export default Section
