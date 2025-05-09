import React from 'react'
import CComp from './CComp'
import Dcomp from './Dcomp'

function AComp({data}) {
  return (
    <div>
      <h2>AComp</h2>
      <CComp data={data}/>
      <Dcomp data={data}/>
    </div>
  )
}

export default AComp
