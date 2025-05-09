import React from 'react'
import "./Navbar.css"

import { NameContext,ProfileContext } from '../App'

function Navbar() {
  return (
    <div className='nav'>
      <NameContext.Consumer>
        {
          name=>{
            return (
              <ProfileContext.Consumer>
                {
                  profile=>{
                    return <h2>{name}
                    <p>{profile}</p>
                    </h2>
                  }
                }
              </ProfileContext.Consumer>
            )
          }
        }
      </NameContext.Consumer>
    </div>
  )
}

export default Navbar
