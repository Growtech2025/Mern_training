
// Problem of making context inside app.js-> agar mere context me 100 function or 100 variable or 100 state hogi to meri app.js file bahut lengthy ho jayegi
//solution-: App src ke andar ek context name ka folder bnakar ke vha par puracode likh do
import { useState,createContext } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";

//step-1 Create the context
export const myContext = createContext();

function App() {


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
    <myContext.Provider value={user}>
      <Child1 />
      <Child2 />
      <Child3 />
    </myContext.Provider>
  );
}

export default App;
