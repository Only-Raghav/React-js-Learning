import React from 'react'

function PropsChildDemo(props) {
  return (
    <>
      <h2>Ducat India</h2>
      {props.children}
    </>
  )
}

export default PropsChildDemo;
