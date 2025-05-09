import React from 'react'
import "./Chatbox.css"
import { ProfileContext } from '../App'

function Chatbox() {
  return (
    <div className='chatbox'>
      <ProfileContext>
        {
          profile=>{
            return <h2>{profile}</h2>
          }
        }
      </ProfileContext>
      
    </div>
  )
}

export default Chatbox
