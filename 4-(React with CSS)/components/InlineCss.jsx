import React from 'react'

function InlineCss() {

    const demo = {
        color: "blue",
        fontSize: "2rem"
    }

  return (
    <>
      <h1 style={{color:"red"}}>Inline CSS In React</h1>

      <h2 style={demo}>Inline CSS Style Hold In Variable </h2>
    </>
  )
}

export default InlineCss
