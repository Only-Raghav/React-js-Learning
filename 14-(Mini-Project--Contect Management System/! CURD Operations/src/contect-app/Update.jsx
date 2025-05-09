import React from 'react'

function Update() {
    const id = prompt("Please enter user id",);

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
  
    </div>
  )
}

export default Update
