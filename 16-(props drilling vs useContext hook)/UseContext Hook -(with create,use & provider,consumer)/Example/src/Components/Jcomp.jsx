import React from 'react'
// import { useContext } from 'react';
// import { UserContext } from '../App';
import { UserContext,InfoContext } from '../App';


function Jcomp() {
  // const user = useContext(UserContext);  
  return (
    <div>
      <UserContext.Consumer>
        {
          user=>{
            return (
              <InfoContext>
                {
                  info=>{
                    return <h2>Jcomp <span>{user}{info}</span></h2>
                  }
                }
              </InfoContext>
            )

          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default Jcomp
