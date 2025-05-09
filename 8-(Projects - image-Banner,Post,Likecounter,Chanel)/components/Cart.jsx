import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Chanel from './Chanel'

function Cart() {
   

    const content = "This Is Sample Wepsite"
    const[data,setData]=useState(content)

  return (
    <div>
        <ul className='buttons'>
            <li><button onClick={()=>setData("HYPER TEXT MARKUP LANGUAGE")} >HTML</button></li> &nbsp;&nbsp;&nbsp;&nbsp;
            <li><button onClick={()=>setData("CASECADING STYLE SHEET")}>CSS</button></li> &nbsp;&nbsp;&nbsp;&nbsp;
            <li><button onClick={()=>setData("JAVA SCRIPT")}>JAVASCRIPT</button></li> &nbsp;&nbsp;&nbsp;&nbsp;
            <li><button onClick={()=>setData("A JAVASCRIPT LAIBRARY")}>REACT</button></li>
        </ul>

        <h1>{data}</h1>
       

      
    </div>
  )
}

export default Cart
