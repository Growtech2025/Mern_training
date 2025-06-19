import { useContext } from "react";
import { myContext } from ".";
function App() {
  //step-4 Use Your context here 
  const {uName,printTable} = useContext(myContext);
  printTable()
  console.log(uName)
  return (
    <div className="App">
      <p>{uName}</p>
    </div>
  );
}

export default App;
