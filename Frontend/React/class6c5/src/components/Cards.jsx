import { useContext } from 'react';
import './Card.css';
import { bitesContext } from '../context/MyContext';
function Card({ data }) {
    console.log("Data", data)
    const {
        addTocard,
        decrement,
        increment,
        trackBtn,
        setTrackBtn,
        cartItem
    } = useContext(bitesContext);


    const already = cartItem?.find((item) => {
        return item?.id === data?.id;
    }
    )


    // console.log(already)


    return (
        <div className="card">
            <img src={data?.image} alt="Food" className="card-image" />
            <div className="card-body">
                <div className="card-title">Name: {data?.productName}</div>
                <div>Rating: ⭐{data?.rating}</div>
                <div>Made By: {data?.madeBy}</div>
                <div className="card-price">
                    Price: <span className="discount">${data?.productPrice}</span>{' '}
                    <span className="original">${data?.actualPrice}</span>
                </div>
                <div>Quantity: {data?.quantity}</div>

                <div className="card-description">
                    {trackBtn ? (
                        <div>
                            <p>{data?.description?.substr(0, 75)}...</p>
                            <span className="toggle-text" onClick={() => setTrackBtn(false)}>Read More</span>
                        </div>
                    ) : (
                        <div>
                            <p>{data?.description}</p>
                            <span className="toggle-text" onClick={() => setTrackBtn(true)}>Read Less</span>
                        </div>
                    )}

                </div>

                {
                    already !== undefined ? (
                        <div className='cartBtn'>
                            <div className="add-to-cart1">
                                <p onClick={() => {
                                    decrement(data);
                                }}>-</p>
                                <p>{already?.quantity}</p>
                                <p onClick={() => {
                                    increment(data);
                                }}>+</p>
                            </div>
                        </div>
                    )
                        :
                        (<div className='cartBtn'>
                            <div className="add-to-cart"><button id='btnAdd' onClick={() => {
                                addTocard(data)
                            }}>Add to cart</button></div>
                        </div>)
                }

            </div>
        </div>
    );
}

export default Card;
