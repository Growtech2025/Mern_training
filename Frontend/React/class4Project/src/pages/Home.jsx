import Card from "../components/Cards"
import  "../components/Card.css"
function Home({ product }) {
  return (
    <div className="card-container">
      {product.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  )
}

export default Home