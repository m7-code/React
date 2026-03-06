import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increment() {
    setNum(num + 1)
  }


  return (
    <div>
      <h1>{num}</h1>
       <button onClick={increment}>Increment</button>
       <button onClick={() => setNum(num - 1)}>Decrement</button>
       <button onClick={() => setNum(0)}>Reset</button>
    </div>
  )
}

export default App