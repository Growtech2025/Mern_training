import "../App.css"
function Card({myName,myAge,changeAge}) {
console.log(myName)
    return (<div className="card">
      <p>My name is {myName}</p>
      <button>change Name</button>
      <p>My city name is Indore </p>
      <button>change city</button>
      <p>My age is {myAge}</p>
      <button onClick={()=>{changeAge(55)}}>change age</button>
      <p>My Qualification is B.tech </p>
      <button>change Qualification</button>
      <p>My state  is M.P.</p>
      <button>change state</button>
    </div>

    )
}
export default Card;