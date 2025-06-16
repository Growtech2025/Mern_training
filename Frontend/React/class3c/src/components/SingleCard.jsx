import "./Card.css"
function SingleCard({ data, loader }) {
    return (
        <div className="user-cards-container1">
            <div className="user-card1">
                {
                    loader ? (<span class="loader"></span>) :
                        (<div>
                            <p><strong>User Id:</strong> {data?.id}</p>
                            <p><strong>User Name:</strong> {data?.name}</p>
                            <p><strong>Company Name:</strong> {data?.company?.name}</p>
                            <p><strong>Latitude:</strong> {data?.address?.geo?.lat}</p>
                            <p><strong>Longitude:</strong> {data?.address?.geo?.lng}</p>
                            <p><strong>Website Url:</strong>
                                <a href={`http://${data?.website}`} target="_blank" rel="noreferrer">{data?.website}</a>
                            </p>
                        </div>)
                }
            </div>
        </div>
    )
}

export default SingleCard