import { useContext } from "react"
import { myContext } from "../App"

function Child1() {
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