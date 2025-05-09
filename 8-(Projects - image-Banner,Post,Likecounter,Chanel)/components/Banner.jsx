import React, { useState } from 'react'
import image1 from '../assets/feelings.jpg'
import image2 from '../assets/november.jpg'


function Banner() {

    const[imge,setImge] = useState(image1)


  return (
    <div>
         <img src ={imge}
        alt='Feelings'
        width="100%"
        height="520px"/>
        <hr/>
       <button onClick={()=>setImge(image1)}>Image Changer</button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={()=>setImge(image2)}>Image Changer</button>

    </div>
  )
}

export default Banner
