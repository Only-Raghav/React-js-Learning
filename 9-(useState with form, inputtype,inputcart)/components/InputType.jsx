import React from 'react'
import { useState } from 'react'

function InputType() {
    const [data,setData]=useState({data1:"hello",data2:"hii"})
  return (
    <>
    <input 
    type="text" 
    value={data.data1}
    onChange={(e)=>setData({...data,data1:e.target.value})}
    placeholder='Enter Your Name'
    />

   <input 
    type="text" 
    value={data.data2}
    onChange={(e)=>setData({...data,data2:e.target.value})}
    placeholder='Enter Your Name'
    />

    <h1>{data.data1}</h1>
    <h1>{data.data2}</h1> 
    </>
  )
}

export default InputType
