import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//step-1 Create the context
export const myContext = createContext();
//step-2 write your all the variables and function jo aap use karna chahte hai
const uName = "Jagmohan"
//index.js ek entry point hai jha par aap direct state globally nhi bna sakte ho es case me aapko app.js ke andar code karma padega
// const[age,setAge]=useState("10")
function printTable() {
  for (let i = 1; i <= 10; i++) {
    console.log(`2*${i} =`, 2 * i)
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));

//step-3 mount your component jo ke aapke context ka use karenge make sure aapko data bhi pass karna hoga matlab context ko provide karna hoga 
root.render(
  <myContext.Provider value={{uName,printTable}}>
    <App />
  </myContext.Provider>
);

