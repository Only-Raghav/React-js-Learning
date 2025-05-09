import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Edit() {
    const[person,setPerson]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/persons/${id}`)
        .then(res=>{
            setPerson(res.data)
            .catch(err=>{
                console.log(err)
            })
        })
    },[])

    const {id}=useParams()

    const update = () => {
        axios.patch(`http://localhost:3000/persons/${id}`,person)
        alert("contect updated")
    }

  return (
    <div >
        <p className='editForm'>
        <input type="text"
        value={person.name}
        onChange={(e)=>{setPerson({...person,name:e.target.value})}}
        placeholder='Enter Your Full Name' />

        <input type="text"
        value={person.mobile}
        onChange={(e)=>{setPerson({...person,mobile:e.target.value})}}

        placeholder='Enter Your mobile number' />

        <input type="text"
        value={person.city}
        onChange={(e)=>{setPerson({...person,city:e.target.value})}}
        placeholder='Enter Your city' />
        
        <button onClick={update}>Update</button>

        </p>

        <div className='updated-data'>
            <h2>Name: {person.name}</h2>
            <h2>Mobile: {person.mobile}</h2>
            <h2>City: {person.city}</h2>

        </div>
      
    </div>
  )
}

export default Edit
