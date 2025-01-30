import React, { useEffect, useState } from 'react'
import './counter.css'

function Counter() {
    const [counter, setCounter] = useState(0)
    const handleInrement = () => {
        setCounter(counter+1);
    }
    const handleDerement = () => {
        setCounter(counter-1)
    }
    useEffect(()=>{
        document.title = `Counter : ${counter}`  
    },[counter])
  return (
    <div className='box'>
      <h1>Counter : {counter}</h1>
      <button onClick={handleInrement}>Add Counter</button>
      <br/>
      <button onClick={handleDerement}>Remove Counter</button>
    </div>
  )
}

export default Counter
