import { useState } from 'react';
import './Card.css';

function Card({ data, cartItem, setCartItem }) {
    const [trackBtn, setTrackBtn] = useState(true);
    let [count, setcount] = useState(data?.quantity);
    const already = cartItem?.find((item) => {
        return item?.id === data?.id;
    }
    )
    // console.log(already)

    function increment() {
        console.log("IIII");
        setcount(data.quantity++);
        // data.quantity++; Ui me render nahi karega change to hoga
    }

    function decrement() {
        console.log("dddd");
        setcount(() => {
            if (data.quantity === 1) {
                removeFromCard(data.id);
                return;
            }
            return data.quantity--;
        })

    }

    function addTocard(data) {
        console.log("btn click hone ", data);

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
            return item?.id === data?.id;
        })
        setCartItem((oldData) => {
            if (kyaMeCardmeHu) {
                alert("Me to pahle se hee cart par hu");
                return oldData;
            }
            return [...oldData, data];
        })
    }

    function removeFromCard(id) {
        const filterValaArray = cartItem?.filter((item) => {
            return item.id !== id;
        })
        setCartItem(filterValaArray);
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
                
                {
                    already !== undefined ? (
                        <div className='cartBtn'>
                            <div className="add-to-cart1">
                                <p onClick={() => {
                                    decrement();
                                }}>-</p>
                                <p>{already?.quantity}</p>
                                <p onClick={() => {
                                    increment();
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
