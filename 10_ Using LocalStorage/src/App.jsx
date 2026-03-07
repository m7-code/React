import React from 'react'

const App = () => {
  
  const user ={
    name: 'me',
    age: 20
  }
  localStorage.setItem('user', JSON.stringify(user))

  const userData = localStorage.getItem('user')
  console.log(JSON.parse(userData))


  return (
    <div>App</div>
  )
}

export default App