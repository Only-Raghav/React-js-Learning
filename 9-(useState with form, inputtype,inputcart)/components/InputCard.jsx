import React, { useState } from 'react'

function InputCard() {

   const [head,setHead]=useState({data1:""},{data2:""},{data3:""},{data4:""})
   
  return (
    <div className='main'>

      <div className='box1'>
        <div className='row1'>
            <input 
            type="text"
            value={head.data1}
            onChange={(e)=>setHead({...head,data1:e.target.value})}
            placeholder='Enter Your Name' />
          

            <input 
            type="color"
            placeholder='Select your Color' />
        </div>

        <div className='row2'>
            <input 
            type="text"
            value={head.data2}
            onChange={(e)=>setHead({...head,data2:e.target.value})}
            placeholder='Enter Your Email'  />

            <input 
            type="color"
            placeholder='Select your Color' />
        </div>

        <div className='row3'>
            <input 
            type="text"
            value={head.data3}
            onChange={(e)=>setHead({...head,data3:e.target.value})}
            placeholder='Enter Your Mobile Number' />

            <input 
            type="color"
            placeholder='Select your Color' />
        </div>

        <div className='row4'>
            <input 
            type="text"
            value={head.data4}
            onChange={(e)=>setHead({...head,data4:e.target.value})}
            placeholder='Enter Your City' />

            <input 
            type="color"
            placeholder='Select your Color' />
        </div>

      </div>


      <div className='box2'>
        <div>
            <h1>{head.data1}</h1>
        </div>
         <div>
            <h1>{head.data2}</h1>
        </div>
        <div>
            <h1>{head.data3}</h1>
        </div>
        <div>
            <h1>{head.data4}</h1>
        </div>


      </div>

    </div>
  )
}

export default InputCard
