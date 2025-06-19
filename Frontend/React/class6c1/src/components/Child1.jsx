import Child2 from "./Child2.jsx"

function Child1({getDataFromTheChild}) {
  return (
    <div>

        <Child2  getDataFromTheChild={getDataFromTheChild}/>
    </div>
  )
}

export default Child1