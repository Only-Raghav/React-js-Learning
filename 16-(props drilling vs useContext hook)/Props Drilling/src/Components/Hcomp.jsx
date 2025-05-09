import React from 'react'
import Jcomp from './Jcomp'

function Hcomp({data}) {
  return (
    <div>
      <h2>Hcomp</h2>
      <Jcomp data={data}/>
    </div>
  )
}

export default Hcomp
