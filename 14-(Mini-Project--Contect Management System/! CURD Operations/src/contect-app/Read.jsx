import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Read() {

    const [person,setPerson]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/persons")
        .then(res=>{
            setPerson(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[person])

    const lists = person.map(user=>{
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.mobile}</td>
            <td>{user.city}</td>
            <td><Link to={`../page/${user.id}`}>View</Link></td>
            <td><Link to={`../edit/${user.id}`}>Edit</Link></td>
        </tr>
        });
    

  return (
    <table style={{padding:"1%"}} border={1}>

        <thead>
            
            <th>Name</th>
            <th>Mobike</th>
            <th>City</th>
            <th>Action</th>
            <th>Update</th>
            

        </thead>

        <tbody>
            {lists}
        </tbody>
    
    </table>
  )
}

export default Read
