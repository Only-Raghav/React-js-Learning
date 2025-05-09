import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function View() {

    const[users,setUsers]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/personsData")
        .then(res => {
            setUsers(res.data);
        })
        .catch((err)=>{
            console.log(err);
            toast.error("somthing Wrong");
            
        })
    },[]);

    const useNav = useNavigate();

    const lists = users.map((user) => 
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.number}</td>
            <td>{user.city}</td>
            <td><button onClick={()=>useNav(`../spv/${user.id}`)}>SPV</button></td>
            <td><button onClick={()=>useNav(`../update/${user.id}`)}>Update</button></td>
            <td><button onClick={()=>useNav(`../delete/${user.id}`)}>Delete</button></td>
        </tr>
    )



  return (
    <div>
        <table border={1}>
            <thead >
                <tr>
                <th>Id.No</th>
                <th>Name</th>
                <th>Mob.No</th>
                <th>City</th>
                <th>SPV</th>
                <th>Update</th>
                <th>Delete</th>
                </tr>
            </thead>

            <tbody>
              {lists}
            </tbody>

        </table>


      
    </div>
  )
}

export default View
