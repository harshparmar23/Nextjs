
"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [count,setCount] = useState(0)
  return (
    <div>
      hello how are you <br />{count}
      <br />
      <button onClick={()=> {setCount(count+1)}}>Count++</button>
    </div>
  )
}

export default page
