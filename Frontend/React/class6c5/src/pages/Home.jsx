import Card from "../components/Cards"
import { useContext } from "react"
import "../components/Card.css"
import { bitesContext } from "../context/MyContext"
function Home() {
  const { products } = useContext(bitesContext)
  // console.log("Products ",products)

  return (
    <div className="card-container">
      {products?.map((item, index) => (
        <div key={index}>
          <Card data={item} />
        </div>
      ))}
    </div>
  )
}

export default Home