import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Page() {

    const[person,setPerson]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/persons/${id}`)
        .then(res=>{
            setPerson(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[person])

    const {id}=useParams()

  return (
    <div className='card'>
      <h2>{person.name}</h2>
      <h2>{person.mobile}</h2>
      <h2>{person.city}</h2>


    </div>
  )
}

export default Page
