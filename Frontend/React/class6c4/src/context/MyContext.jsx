

import Child1 from "../components/Child1.jsx"
import Child2 from "../components/Child2.jsx"
import Child3 from "../components/Child3.jsx"

import { useState, createContext } from "react";
//step-1 Create the context
export const myContext = createContext();
function MyContext() {
    const [age, setAge] = useState(27);
    //step-2 write your all the variables and function jo aap use karna chahte hai
    const uName = "Jagmohan"
    //index.js ek entry point hai jha par aap direct state globally nhi bna sakte ho es case me aapko app.js ke andar code karma padega
    // const[age,setAge]=useState("10")
    function printTable() {
        for (let i = 1; i <= 10; i++) {
            console.log(`2*${i} =`, 2 * i)
        }
    }
    const user = {
        age,
        setAge,
        uName,
        printTable
    }


    return (
        // step-3 I have provide my data to below these childs
        <myContext.Provider value={user}>
            <Child1 />
            <Child2 />
            <Child3 />
        </myContext.Provider>
    )
}

export default MyContext