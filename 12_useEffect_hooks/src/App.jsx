import React, { use, useEffect, useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)

  function achange() {
    console.log('achange')
  }

  useEffect(() => {
   achange()
  }, [a])

  return (
    <div>
      <h1>A: {a}</h1>
      <button onClick={()=>{setA(a + 1)}}>Click me A</button>
    </div>
  )
}

export default App