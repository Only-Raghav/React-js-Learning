import React from 'react'
import Article from './Article'
import Sidebar from './Sidebar'

function Main() {

    const main = {
        display:"flex",
        justifyContent: "space-between",
         margin: "0",
        padding: "0"
    }

  return (
  
    <div style={main}>
    <Article></Article>
    <Sidebar></Sidebar>
    </div>
      
   
  )
}

export default Main
