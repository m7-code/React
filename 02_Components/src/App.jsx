import React from 'react'
import card from './components/card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div >
    {Navbar()}
    {card()}
    <Navbar/>
    <card/>
    
    </div>
    
    

  )
}

export default App