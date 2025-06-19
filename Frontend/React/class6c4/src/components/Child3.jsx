import { useContext } from "react"
import { myContext } from "../context/MyContext"

function Child3() {
    const { age, uName } = useContext(myContext)

    return (
        <div>
            <h1>Child 3 </h1>
            <p>Name:{uName}</p>
            <p>Age:{age}</p>
            <hr />
        </div>
    )
}

export default Child3