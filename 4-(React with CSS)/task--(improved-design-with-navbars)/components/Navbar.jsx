import React from 'react'

function Navbar() {

  const navs =[
    {
      id: 1,
      url: "./page1",
      urlName: "Page One"
    },
    {
      id: 2,
      url: "./page2",
      urlName: "Page Two"
    },
    {
      id: 3,
      url: "./page3",
      urlName: "Page Three"
    },
    {
      id: 4,
      url: "./page4",
      urlName: "Page Four"
    },
    {
      id: 5,
      url: "./page5",
      urlName: "Page Five"
    }
  ]

  const list = navs.map(nav=><li key={nav.id}><a href={nav.url}/>{nav.urlName}</li>)

    return (
   <div className='head'>
    <a href='./' className='title'>SiteName</a>
    <ul>
      {list}

    </ul>
   </div>
  )
}

export default Navbar

