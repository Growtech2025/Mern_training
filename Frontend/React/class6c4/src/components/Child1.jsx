import { useContext } from "react"
import { myContext } from "../context/MyContext"

function Child1() {
    // step-4 we are using the context value 
    const {age,uName}=useContext(myContext)
    return (
        <div>
            <h1>Child 1 </h1>
            <p>Name:{uName}</p>
            <p>Age:{age}</p>
            <hr />
        </div>
    )
}

export default Child1