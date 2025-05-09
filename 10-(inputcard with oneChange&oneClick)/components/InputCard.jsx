import React, { useState } from 'react'

function InputCard() {

   const [head,setHead]=useState({data1:"",color1:"",align1:""},{data2:"",color2:"",align2:""},{data3:"",color3:"",align3:""},{data4:"",color4:"",align4:""})
   
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
            onChange={(e)=>setHead({...head,color1:e.target.value})}
           />
            <button onClick={()=>setHead({...head,align1:"Left"})}>Left</button>
            <button onClick={()=>setHead({...head,align1:"Center"})}>Centre</button>
            <button onClick={()=>setHead({...head,align1:"Right"})}>Right</button>
            </div>

            

        <div className='row2'>
            <input 
            type="text"
            value={head.data2}
            onChange={(e)=>setHead({...head,data2:e.target.value})}
            placeholder='Enter Your Email'  />

            <input 
            type="color"
            onChange={(e)=>setHead({...head,color2:e.target.value})} />
            <button onClick={()=>setHead({...head,align2:"Left"})}>Left</button>
            <button onClick={()=>setHead({...head,align2:"Center"})}>Centre</button>
            <button onClick={()=>setHead({...head,align2:"Right"})}>Right</button>
        </div>

        <div className='row3'>
            <input 
            type="text"
            value={head.data3}
            onChange={(e)=>setHead({...head,data3:e.target.value})}
            placeholder='Enter Your Mobile Number' />

            <input 
            type="color"
            onChange={(e)=>setHead({...head,color3:e.target.value})} />
            <button onClick={()=>setHead({...head,align3:"Left"})}>Left</button>
            <button onClick={()=>setHead({...head,align3:"Center"})}>Centre</button>
            <button onClick={()=>setHead({...head,align3:"Right"})}>Right</button>
        </div>

        <div className='row4'>
            <input 
            type="text"
            value={head.data4}
            onChange={(e)=>setHead({...head,data4:e.target.value})}
            placeholder='Enter Your City' />

            <input 
            type="color"
            onChange={(e)=>setHead({...head,color4:e.target.value})} />
            

            <button onClick={()=>setHead({...head,align4:"Left"})}>Left</button>
            <button onClick={()=>setHead({...head,align4:"Center"})}>Centre</button>
            <button onClick={()=>setHead({...head,align4:"Right"})}>Right</button>
        </div>

      </div>


      <div className='box2'>
        <div>
            <h1 style={{color:head.color1,textAlign:head.align1}}>{head.data1}</h1>
        </div>
         <div>
            <h1 style={{color:head.color2,textAlign:head.align2}}>{head.data2}</h1> 
        </div>
        <div>
            <h1 style={{color:head.color3,textAlign:head.align3}}>{head.data3}</h1>
        </div>
        <div>
            <h1 style={{color:head.color4,textAlign:head.align4}}>{head.data4}</h1>
        </div>


      </div>

    </div>
  )
}

export default InputCard
