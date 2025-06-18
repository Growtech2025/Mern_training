import "../components/Card.css"
import Card from "../components/Cards"
function MyCart({ cartItem }) {
  console.log("Item in cart", cartItem)
  return (
    <div>


      {
        cartItem?.length === 0 ? (
          <div className="empty-cart">
            <p>There is no item in Cart</p>
          </div>
        ) : (
          <div className="card-container">
            {cartItem?.map((item, index) => (
              <div key={index}>
                <Card data={item} />
              </div>
            ))}
          </div>
        )
      }

    </div>
  )
}

export default MyCart