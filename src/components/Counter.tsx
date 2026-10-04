import React, { useState } from 'react'

const Counter = () => {

    const [count,setCount]=useState<number>(0)
  return (
    <div>

      <p>Cups Ordered:{count}</p>
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    </div>
  )
}

export default Counter
