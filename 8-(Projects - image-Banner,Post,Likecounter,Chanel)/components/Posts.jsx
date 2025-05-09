import React, { useState } from 'react'


function Posts() {
    const init = 0
    const [count,setCount]=useState(init)

  return (
    <div className='post'>
      <h1>{count}</h1>
      <button onClick={() => setCount( count + 1)}>Like</button> &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => setCount( count - 1)}>Dislike</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Posts
