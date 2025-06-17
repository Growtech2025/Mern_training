import { useState } from 'react';
import './Card.css';

function Card({ data }) {
    const [trackBtn, setTrackBtn] = useState(true);

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
                            <button className="toggle-btn" onClick={() => setTrackBtn(false)}>Read More</button>
                        </div>
                    ) : (
                        <div>
                            <p>{data?.description}</p>
                            <button className="toggle-btn" onClick={() => setTrackBtn(true)}>Read Less</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;
