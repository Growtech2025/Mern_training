import Child3 from "./Child3.jsx"

function Child2({getDataFromTheChild}) {
  return (
    <div><Child3  getDataFromTheChild={getDataFromTheChild}/></div>
  )
}

export default Child2