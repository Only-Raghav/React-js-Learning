import React from 'react'
import "./Main.css"
import Navbar from './Navbar'
import Section from './Section'
import Chatbox from './Chatbox'



function Main() {
  return (
    <div className='main'>
        <Navbar/>
        <Section/>
        <Chatbox/>
      
    </div>
  )
}

export default Main
