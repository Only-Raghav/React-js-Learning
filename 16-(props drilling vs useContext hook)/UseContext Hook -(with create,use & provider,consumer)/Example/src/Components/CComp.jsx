import React from 'react'
import Ecomp from './Ecomp'
import Fcomp from './Fcomp'

import { useContext } from 'react'
import { UserContext,InfoContext } from '../App'



function CComp() {
const user = useContext(UserContext);
const info = useContext(InfoContext);


  return (
    <div>
      <h2>CComp <span>{user}{info}</span></h2>
      <Ecomp />
      <Fcomp />

    </div>
  )
}

export default CComp
