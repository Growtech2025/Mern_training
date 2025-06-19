import { useContext } from "react"
import { myContext } from "../context/MyContext"

function Child2() {
        const {age,uName,printTable}=useContext(myContext);
        printTable()
    
    return (
        <div>
            <h1>Child 2 </h1>
            <p>Name:{uName}</p>
            <p>Age:{age}</p>
            <hr />
            <hr />
        </div>
    )
}

export default Child2