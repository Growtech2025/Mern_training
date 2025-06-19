import { useState } from 'react'
import Child1 from "./components/Child1.jsx"
import './App.css'

function App() {
  const [name, setName] = useState("Mohan");
  function getDataFromTheChild(data) {
    setName(data)
  }

  return (
    <>
      <p>{name}</p>
      <Child1 getDataFromTheChild={getDataFromTheChild} />
    </>
  )
}

export default App
