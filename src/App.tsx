import { useState } from 'react'
import './App.css'
import React from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <h1>Basic counter</h1>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
