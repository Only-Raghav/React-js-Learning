import React from 'react'
import Hcomp from './Hcomp'
import Icomp from './Icomp'

function Gcomp({data}) {
  return (
    <div>
        <h2>Gcomp <span>data={data}</span></h2>
        <Hcomp data={data}/>
        <Icomp data={data}/>
      
    </div>
  )
}

export default Gcomp
