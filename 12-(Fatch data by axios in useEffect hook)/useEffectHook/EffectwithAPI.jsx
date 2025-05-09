import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function EffectwithAPI() {

    const[posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log(res)
            setPosts(res.data)})
        .catch(err=>{
            console.log(err)
        })
    },[posts])

    const list = posts.map(post => 
    <div className='card' key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>)

  return (
    <div>
        <h1>This Is My First Attempt</h1>
        <div className='row'>
            {list}
        </div>
      
    </div>
  )
}

export default EffectwithAPI
