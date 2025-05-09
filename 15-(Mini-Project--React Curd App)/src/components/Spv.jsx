import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

function Spv() {
    

    const {id} = useParams();

   const [user,setUser]=useState({});

   useEffect(()=>{
    axios.get(`http://localhost:3000/personsData/${id}`)
    .then((res)=>{setUser(res.data)})
    .catch((err)=>{
      console.log(err);
      toast.error("somthing wrong in SPV")})
   },[user]);

  return (
    <div>
      <h3>Single Page View {id}</h3>
      <p>{user.name}</p>
      <p>{user.number}</p>
      <p>{user.city}</p>

    </div>
  )
}

export default Spv
