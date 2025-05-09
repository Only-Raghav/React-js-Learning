import React from 'react'

function Navbar() {

    const nav = { 
        backgroundColor:"gold",
        display:"flex",
        justifyContent: "space-between",
        padding: "2% 7%"
        
    }

    const navi = {
        border: "1px solid black",
        padding: "0.5%",
        borderRadius: "5px"
    }

    


  return (
    <>
        <div style={nav}>
            <div style={navi}>HOME</div>
            <div style={navi}>PAGE1</div>
            <div style={navi}>PAGE2</div>
            <div style={navi}>PAGE3</div>
            <div style={navi}>PAGE4</div>
            </div> 
      
    </>
  )
}

export default Navbar

