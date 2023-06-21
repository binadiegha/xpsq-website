import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { COMPANY_ICON } from './assets/svgs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>
          <img src={COMPANY_ICON} className="logo" alt="Vite logo" />
        </div>
       
      </div>
      <h1>Xpletsquare</h1>
      <div className="card">
        <p>
          Dedicated to building tech that work and <br />Designs that speaks to the hearts of the people they are made for.
        </p>
      </div>
      <p className="read-the-docs">
        Email us at hello@xpletsquare.com
      </p>
    </>
  )
}

export default App
