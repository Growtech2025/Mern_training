import { useState } from "react"
import Child1 from "./components/Child1"

function App() {
    const [money,setMoney]=useState(10000000)
  return (
    <div>
        <Child1 money={money}/>


    </div>
  )
}

export default App