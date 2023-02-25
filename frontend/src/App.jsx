import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='login'>
        <Login/>
      </div>
    </div>
  )
}

export default App
