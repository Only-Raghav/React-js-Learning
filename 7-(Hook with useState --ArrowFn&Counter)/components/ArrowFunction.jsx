import React from 'react'

function ArrowFunction() {
    
    let hii = ()=>{
        alert("Hello Mister !...")
    }

    let changeData = ()=>{
        document.getElementById('data').innerHTML="Byee..!"
    }

  return (
    <div>
      <h1 id='data'>Hello</h1>

      <button onClick={()=>alert("Raghav Hii!")}>Say Hii !</button>
      <button onClick={hii}>Hello ji !</button>

      <button onClick={changeData}>Change Your Data</button>

    </div>
  )
}

export default ArrowFunction
