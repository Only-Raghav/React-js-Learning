import axios from 'axios';
import React, { useState } from 'react'

function Login() {

    // const [user,setUser] = useState({"name":"","password":""});

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");





    function usernameHandler(e) {
        setUsername(e.target.value)
    }
    function passwordHandler(e) {
        setPassword(e.target.value)
    }

    async function submitHandler(e){
        e.preventDefault();

        try{
            const response = await axios.get("http://localhost:3000/users",{
                    params:{
                    name : username,
                    password: password,
                }
            });
        console.log(response.data);

        
                const user = response.data.find((user)=> user.name === username && user.password === password );

                if(user){
                    setMessage("Logined sussesfully");
                }
                else{
                    setMessage("invalid username & password");
            }
        }
        catch(err){
            setMessage("Error logging in");
        } 

    }
   

  return (
    <>
    <form onSubmit={submitHandler}>
        <div>
            <label>username:</label>
            <input type="text"
            placeholder='Enter Username'
            value={username}
            onChange={usernameHandler} />
        </div>
        <div>
            <label>password:</label>
            <input type="text"
            placeholder='Enter Password'
            value={password}
            onChange={passwordHandler} />
        </div>
        <button>login</button>
    </form>
    <div>
        { message && <p>{message}</p>}
    </div>
    </>
    
  )
}

export default Login
