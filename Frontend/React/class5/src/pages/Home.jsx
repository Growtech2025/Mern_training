import Card from "../components/Cards"
import "../components/Card.css"
function Home({ product,setCartItem,cartItem }) {
  return (
    <div className="card-container">
      {product?.map((item, index) => (
        <div key={index}>
          <Card  data={item} setCartItem={setCartItem} cartItem={cartItem} />
        </div>
      ))}
    </div>
  )
}

export default Home