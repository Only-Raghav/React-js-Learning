import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Insert() {

    const[person,setPerson]=useState({"name":"","mobile":"","city":""})

    const save = ()=>{
        axios.post("http://localhost:3000/persons",person)
        alert("contect saved")
    }


  return (
    <div>
        <p className='insert'>

        <input type="text" 
        value={person.name}
        onChange={(e)=>setPerson({...person,name:e.target.value})}
        placeholder='Enter Your Full Name'
        />

        <input type="text" 
        value={person.mobile}
        onChange={(e)=>setPerson({...person,mobile:e.target.value})}
        placeholder='Enter Your Mobile Number '
        />

        <input type="text" 
        value={person.city}
        onChange={(e)=>setPerson({...person,city:e.target.value})}
        placeholder='Enter Your city'
        />

        <button onClick={save}>Save Contect</button>
                
        </p>

        
    </div>
  )
}

export default Insert
