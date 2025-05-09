import React from 'react'
import Ecomp from './Ecomp'
import Fcomp from './Fcomp'

function CComp({data}) {
  return (
    <div>
      <h2>CComp <span>{data}</span></h2>
      <Ecomp data={data}/>
      <Fcomp data={data}/>

    </div>
  )
}

export default CComp
