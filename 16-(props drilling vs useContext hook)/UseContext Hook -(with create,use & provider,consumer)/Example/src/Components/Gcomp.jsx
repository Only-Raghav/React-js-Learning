import React from 'react'
import Hcomp from './Hcomp'
import Icomp from './Icomp'
// import { useContext } from 'react';
// import { UserContext } from '../App';
import { InfoContext, UserContext} from '../App';



function Gcomp() {
  // const user = useContext(UserContext);  
  return (
    <div>
      <UserContext.Consumer>
        {
          user=>{
            return (
              <InfoContext.Consumer>
                {
                  info=>{
                    return <h2>Gcomp  <span>{user}{info}</span></h2>
                  }
                }
              </InfoContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
        <Hcomp/>
        <Icomp/>
      
    </div>
  )
}

export default Gcomp
