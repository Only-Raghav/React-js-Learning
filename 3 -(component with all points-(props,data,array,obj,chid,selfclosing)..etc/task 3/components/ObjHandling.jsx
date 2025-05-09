import React from 'react'

function ObjHandling() {

    let list = "Object In Orderd List";

    const obj = {
        'A': "HTML",
        'B': "CSS",
        'C': "JAVASCRIPT",
        'D': "REACT"
    }
    return (
      <>
        <h2>{list}</h2>
        <ol>
          <li>{obj.A}</li>
          <li>{obj.B}</li>
          <li>{obj.C}</li>
          <li>{obj.D}</li>
        </ol>
      </>
  )
}

export default ObjHandling
