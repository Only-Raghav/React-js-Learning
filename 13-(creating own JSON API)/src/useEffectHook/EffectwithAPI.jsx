import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function EffectwithAPI() {

    const[users,setUsers]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(res=>{
            console.log(res)
            setUsers(res.data)})
        .catch(err=>{
            console.log(err)
        })
    },[])

    const list = users.map(user => 
    <div className='card' id={user.theme} key={user.id}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
    </div>)

  return (
    <div>
        <h1>This Is My First Attempt</h1>
        <div className='row'>
            {list}
        </div>
      
    </div>
  )
}

export default EffectwithAPI
