import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='home'>

        <div className='home-heading'>
            <h2>React With Router</h2>
        </div>

        <div className='home-defination'>
            <p>React Router is a popular library for handling navigation in React applications. It enables the creation of single-page applications with navigation that feels like a traditional multi-page website. React Router provides a set of navigational components and a declarative approach to define the routes of your application.</p>
        </div>

        <div className='home-setup'>
            <h3>Setup React With Router</h3>
            <p>npm create vite@latest</p>
            <p>npm install react-router-dom@6</p>
        </div>
      
    </div>
  )
}

export default Home
