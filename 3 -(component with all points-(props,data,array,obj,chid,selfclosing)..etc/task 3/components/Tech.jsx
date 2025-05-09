import React from 'react'

function Tech(props) {  // props is a object as perameter

  let fixedValue = "welcome to ::::::";

  return (
    <>
      <h1> {fixedValue} {props.data} {props.chapter}</h1>
    </>
  )
}

export default Tech
