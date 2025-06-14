import { useState } from "react";
import Card from "./components/Card.jsx";
import "./components/Card.css"
function App() {

    const [cardData, setCardData] = useState(
        [
            {
                "image": "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
                "imageName": "Mountain Sunset",
                "imgDescription": "A stunning sunset view behind a snow-capped mountain range.",
                "imgPrice": 49.99
            },
            {
                "image": "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                "imageName": "Forest Path",
                "imgDescription": "A tranquil forest trail covered in autumn leaves.",
                "imgPrice": 39.99
            },
            {
                "image": "https://media.istockphoto.com/id/621973728/photo/young-man-photographer-looking-at-camera.jpg?s=612x612&w=is&k=20&c=CDMkcncJVmyiMiTgrE5Np5N97X1McU_n9jZMMZ6CMEY=",
                "imageName": "Ocean Waves",
                "imgDescription": "Powerful waves crashing against rocky shores under a cloudy sky.",
                "imgPrice": 44.95
            },
            {
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
                "imageName": "City Lights",
                "imgDescription": "A vibrant city skyline at night with glowing lights.",
                "imgPrice": 59.99
            },
            {
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkGYClv0gDlPvqNgktfTfY9VyI1R0Msfb6J1ZQVD-1o8iPEPoO8ubB2hM&s",
                "imageName": "Desert Dunes",
                "imgDescription": "Golden sand dunes stretching under a deep blue sky.",
                "imgPrice": 34.50
            }
        ])

    return (
        <div className="App-Containr">

            {/* <Card data={cardData[0]} setCardData={setCardData} />
            <Card data={cardData[1]} setCardData={setCardData} />
            <Card data={cardData[2]} setCardData={setCardData} />
            <Card data={cardData[3]} setCardData={setCardData} />
            <Card data={cardData[4]} setCardData={setCardData} /> */}


            {
                cardData?.map((data,index)=>{
                    return (<div key={index}>
                        <Card data={data} setCardData={setCardData}/>
                    </div>)
                })
            }
        </div>
    )
}

export default App