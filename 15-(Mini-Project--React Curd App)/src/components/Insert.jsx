import axios from 'axios';
import React, {  useState } from 'react'
import { toast } from 'react-toastify';

function Insert() {

    const [data,setdata] = useState({"name":"","number":"","city":""});



    function nameHandler(event){
        setdata({...data,name:event.target.value});
        
    }

    function numberHandler(event){
        setdata({...data,number:event.target.value});
    }

    function cityHandler(event){
        setdata({...data,city:event.target.value});
    }

    const save = (event) =>{
        event.preventDefault();
        axios.post("http://localhost:3000/personsData",data);
        toast.success("Data Saved Succesfully");
    }

    // function submitHandler(event){
    //     event.preventDefault();
    //     console.log(data);
        
    // }






  return (
    <div>
        <form>

        <div>
            <input
            type="text"
            value={data.name}
            onChange={nameHandler}
            placeholder='Enter Your Name'
            />
        </div>

        <div>
            <input
            type="text"
            value={data.number}
            onChange={numberHandler}
            placeholder='Enter Your Mobile Number'
            />
        </div>

        <div>
            <input
            type="text"
            value={data.city}
            onChange={cityHandler}
            placeholder='Enter Your City'
            />
        </div>

        <div>
            <button onClick={save}>Submit</button>
        </div>

        </form>
        
      
    </div>
  )
}

export default Insert
