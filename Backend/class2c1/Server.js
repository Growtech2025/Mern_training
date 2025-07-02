// step-1 
const express = require("express");
require("dotenv").config();
const DataBaseConnection = require("./config/DataBaseConnect.js");
const CourseRoute = require("./routes/CourseRoute.js")
// step-2 instance creation
const app = express();
// step-3server ko start karunga

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})



//for getting the data from the req.body u have to use middle ware 
app.use(express.json())

//step-4 me UI me verify karne ke 
app.get("/", (req, res) => {
    res.send("<h1>Our Project now live</h1>")
})


//step-5 Data base connection 
DataBaseConnection();


//step-6 call here routes 
app.use("/course/api/v1", CourseRoute)
