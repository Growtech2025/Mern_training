import { useNavigate } from "react-router-dom";
import "../components/Card.css"
import Card from "../components/Cards"
function MyCart({ cartItem }) {

  const navigate = useNavigate();

  console.log("Item in cart", cartItem);
  function GoToHome(){
    navigate('/');
  }
  return (
    <div>
      {
        cartItem?.length === 0 ? (
          <div className="empty-cart">
            <p>There is no item in Cart</p>
            <button onClick={() => {GoToHome()}}>Go to Home</button>
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