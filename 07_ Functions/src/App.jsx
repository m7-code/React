import React from 'react'

const App = () => {
  // function handleClick() {
  //   console.log('Button clicked!')
  // }
  
  

  return (
    <div>
      <h1>Functions</h1>
      <button onClick={function(){ console.log('Button clicked!') }}>Click me</button>
    </div>
  )
}

export default App