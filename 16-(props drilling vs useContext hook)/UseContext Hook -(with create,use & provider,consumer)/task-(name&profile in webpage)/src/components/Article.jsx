import React from 'react'
import "./Article.css"
import { NameContext,ProfileContext } from '../App'

function Article() {
  return (
    <div className='article'>
            <NameContext.Consumer>
        {
          name=>{
            return(
              <ProfileContext.Consumer>
                {
                  profile=>{
                    return  <h2>{name}
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

export default Article
