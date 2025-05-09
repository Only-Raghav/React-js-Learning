import React, { useState } from 'react'

function Counter() {

    const [count,setCount]=useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount( count + 1)}>Like</button>
      <button onClick={() => setCount( count - 1)}>Dislike</button>



    </div>
  )
}

export default Counter
