import React, { useContext } from 'react'
import { UserContext,InfoContext } from '../App'

function Fcomp() {

  const user = useContext(UserContext);
  const info = useContext(InfoContext);

  return (
    <div>
      <h2>Fcomp <span>{user}{info}</span></h2>
    </div>
  )
}

export default Fcomp
