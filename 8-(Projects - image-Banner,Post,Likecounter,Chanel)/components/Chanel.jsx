import React, { useState } from 'react'

function Chanel() {
    const [user,setUser]=useState('guest')
  return (
    <div>
        <h1>{user}</h1>
        <ul>
            <li><button onClick={()=>setUser('Welcome Babu')}>Hello..!</button></li>
            &nbsp;
            &nbsp;
            <li><button onClick={()=>setUser('Mat Jao Na Babu')}>Byee..!</button></li>

        </ul>
      
    </div>
  )
}

export default Chanel
