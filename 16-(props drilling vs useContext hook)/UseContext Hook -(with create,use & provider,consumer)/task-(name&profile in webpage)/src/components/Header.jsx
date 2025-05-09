import React, { useContext } from 'react'
import "./Header.css"
import { NameContext, ProfileContext } from '../App'

function Header() {
const name = useContext(NameContext);
const profile = useContext(ProfileContext);


  return (
    <>
    <div className='head'>
      <h2>{name}
      <p>{profile}</p>
      </h2>
    </div>

    </>
  )
}

export default Header
