import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getComputedStyle } from 'react-dom'


// This is a simple React component that uses Vite for development



function App() {
  const [count, setCount] = useState(0)
  // This is a simple React component that uses Vite for development
  const handleClick = () => {
    setCount(count + 1)
  }

  <samp>{count}
  <h1>console here
    <span>Click the button to increment the count</span>
    
  </h1>
  </samp>

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

return target(new , () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <button onClick={handleClick}>Increment Count</button>
      <h2>Current Count:</h2>
      <h5>{count} , () => { Headers }</h5>
      <p>Current Count: {count}</p>
    </div>
  )
});  
