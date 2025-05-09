import React from 'react'
import { useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Update() {

  const {id} = useParams();

  const [user,setUser]=useState({});

  useEffect(()=>{
   axios.get(`http://localhost:3000/personsData/${id}`)
   .then((res)=>{setUser(res.data)})
   .catch((err)=>{
    console.log(err);
    toast.error("somthing wrong in SPV")})
  },[]);

  
  function nameHandler(event){
    setUser({...user,name:event.target.value});    
}

function numberHandler(event){
  setUser({...user,number:event.target.value});
}

function cityHandler(event){
  setUser({...user,city:event.target.value});
}


  const update = (event)=>{
    event.preventDefault();
    axios.patch(`http://localhost:3000/personsData/${id}`,user)
    toast.success("Data Updated Succesfully");

  }

  return (
    <div>
      <h3>THis is YOur Update Page</h3>

      <div>

      <form>

<div>
    <input
    type="text"
    value={user.name}
    onChange={nameHandler}
    placeholder='Enter Your Name'
    />
</div>

<div>
    <input
    type="text"
    value={user.number}
    onChange={numberHandler}
    placeholder='Enter Your Mobile Number'
    />
</div>

<div>
    <input
    type="text"
    value={user.city}
    onChange={cityHandler}
    placeholder='Enter Your City'
    />
</div>

<div>
    <button onClick={update}>Update</button>
</div>

</form>

      </div>

      <div>
        <h4>Data Preview</h4>
        <p>{user.name}</p>
        <p>{user.number}</p>
        <p>{user.city}</p>

      </div>
      
    </div>
  )
}

export default Update
