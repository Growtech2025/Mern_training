import { useState } from "react"
import "./App.css"
import Card from "./components/Card"
function App(){


const fname="ABCD"
const[age,setAge]=useState(23)

const [first, setfirst] = useState(second)
return(
<div>
  {/* <Card myName={fname}/> */}
  <Card myName={fname} myAge={age} changeAge={setAge}></Card>

</div>
)
}
export default App;