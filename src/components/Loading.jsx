import React from 'react'

import './loading.css'


import { trefoil } from 'ldrs'

trefoil.register()


const Loading = () => {
  return (
    <div className='loading'>


<l-trefoil
  size="100"
  stroke="8"
  stroke-length="0.15"
  bg-opacity="0.551"
  speed="1.4" 
  color="yellow" 
>

</l-trefoil>
</div>
  )
}

export default Loading
