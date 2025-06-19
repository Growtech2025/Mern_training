import { useState } from 'react';
import './Card.css';

function Card({ data, cartItem, setCartItem }) {
    const [trackBtn, setTrackBtn] = useState(true);
    function handCardItem(data) {
        console.log("btn click hone ", data)

        //this is add an object inside itemCard array which is in app.js
        // setCartItem(data)

        //this is add an element inside itemCard array which is in app.js but har bar 1 item hee add karega jo last vala hoga use hataega or naya vala dalega 
        // setCartItem([data])

        //this is the add old item uske sath new item bhi add karega lekin problem hai bcs jo item cart me hai vo again add kar rha hai jabki esa nhi karna chaheaye 
        // setCartItem((oldData) => {
        //     return [...oldData, data];
        // })

        //this is good one
        const kyaMeCardmeHu = cartItem?.some((item) => {
            return item?.id === data?.id

        })
        setCartItem((oldData) => {
            if (kyaMeCardmeHu) {
                alert("Me to pahle se hee cart par hu")
                return oldData
            }
            return [...oldData, data];
        })


    }
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

                <div className='cartBtn'>
                    <div className="add-to-cart"><button id='btnAdd' onClick={() => {
                        handCardItem(data)
                    }}>Add to cart</button></div>
                </div>
            </div>
        </div>
    );
}

export default Card;
