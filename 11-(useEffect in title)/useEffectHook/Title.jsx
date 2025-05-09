import React, { useEffect } from 'react'
import { useState } from 'react'


function Title() {

    const[count,setCount]=useState(0)

    useEffect(()=>{
        // console.log('hello')  
        // yeh title bar par use hoga 
        document.title=count
    },[count])

  return (
    <div>

        <h1>post count {count}</h1>
        <button onClick={()=>setCount(count+1)}>like</button>
      
    </div>
  )
}

export default Title
