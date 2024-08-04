import React from 'react'
import { tailspin } from 'ldrs'
import './loading.css'

tailspin.register()



const Loading = () => {
  return (
    <div className='loading'>


<l-tailspin
  size="100"
  stroke="12"
  speed="0.9" 
  color="white" 
></l-tailspin>
    </div>
  )
}

export default Loading
