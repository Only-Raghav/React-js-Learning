import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Section from './components/Section'




function App() {

  return (
    <>
    <marquee>This is blog site</marquee>
    <div className='Admin'>
    <Header/>
    <Section></Section>
    </div>
    
    </>
  )
}

export default App
