

import  "./Card.css"
function UserCard({ arr }) {
    return (
        <div className="user-cards-container">
            {arr.map((data, index) => (
                <div className="user-card" key={index}>
                    <p><strong>User Name:</strong> {data?.name}</p>
                    <p><strong>Company Name:</strong> {data?.company?.name}</p>
                    <p><strong>Latitude:</strong> {data?.address?.geo?.lat}</p>
                    <p><strong>Longitude:</strong> {data?.address?.geo?.lng}</p>
                    <p><strong>Website Url:</strong> <a href={`http://${data?.website}`} target="_blank" rel="noreferrer">{data?.website}</a></p>
                </div>
            ))}
        </div>

    )
}

export default UserCard