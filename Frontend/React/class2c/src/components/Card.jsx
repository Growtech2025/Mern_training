import "./Card.css"
function Card({ data, setCardData }) {
    return (
        <div className="card-container">
            <img src={data?.image} alt="demo" />
            <p>{data?.imageName}</p>
            <p className="image-name">{data?.imgDescription}</p>
            <p className="image-name">{data?.imgPrice}</p>
        </div>

    )

}
export default Card;