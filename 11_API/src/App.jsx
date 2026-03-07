import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const App = () => {

  // async function getData() {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  
  
  // axios
  
  const [data, setdata] = useState([])

 async function getData() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setdata(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div >
      <button className='btn' onClick={getData}>Get Data</button>

      <div>
        {data.map((item , index) => (
          <div key={item.id}>
            <h3>{item.title} {index + 1}</h3>
            <p>{item.body} {index + 1}</p>
          </div>
        ))}
      </div>

      
    </div>
    
  )
}

export default App