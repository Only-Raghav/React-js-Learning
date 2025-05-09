import React from 'react'

function Home() {

    function logoutHandler() {
        localStorage.clear()
        window.location.reload();
    }

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={logoutHandler}>logout</button>
    </div>
  )
}

export default Home
