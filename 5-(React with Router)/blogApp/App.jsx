import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Page from './components/page'

function App() {

  return (
    <>
    <Header>
      <marquee>This is blog site</marquee>
    </Header>
    <section className='text'>
      <Routes>
        <Route path='/' element={<Page data="Homepage"></Page>}></Route>
        <Route path='/page1' element={<Page data="page 1"></Page>}></Route>
        <Route path='/page2' element={<Page data="page 2"></Page>}></Route>
        <Route path='/page3' element={<Page data="page 3"></Page>}></Route>
        <Route path='/page4' element={<Page data="page 4"></Page>}></Route>
        <Route path='*' element={<h1>page not found</h1>}></Route>
      </Routes>
    </section>
    </>
  )
}

export default App
