import React, { useEffect, useState } from 'react'
import  './bgcolor.css'

function Bgcolor() {
  const[color,setColor]=useState("")
  const handleBgcolor=(color)=>{
    setColor(color)
  }
useEffect(()=>{
  document.body.style.backgroundColor=color
},[color])

  console.log(color);
  return (
    <div  style={{height:'80vh'}} className='container d-flex justify-content-center align-items-center'>
      <div className='content d-flex  justify-content-center align-items-center flex-column '>
        <h1>Background Color</h1>
        <div  className='mt-3 colors  d-flex justify-content-center  align-items-center'>
        
        <div  onClick={()=>handleBgcolor("Red")}  className='bg-danger Red'>Red</div>
        <div onClick={()=>handleBgcolor("Yellow")} className='bg-warning Yellow'>Yellow</div>
        <div onClick={()=>handleBgcolor("grey")} className='bg-secondary'>Grey</div>
        <div onClick={()=>handleBgcolor("Blue")} className='bg-info'>Blue</div>
        <div onClick={()=>handleBgcolor("Green")} className='bg-success'>Green</div>

           
        </div>

      </div>
    </div>
  )
}

export default Bgcolor