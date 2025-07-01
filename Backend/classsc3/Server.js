// step 1 express ko import kar lo
const express = require("express");
const mongoose = require("mongoose")

//step 2 create the instance of express application
const app = express();


// step3 - start your server
const PORT = 3500;
app.listen(PORT, () => {
    console.log(`server is running,${PORT}`)
})


//step- 4 check your server goto chrome http://localhost:3500/
app.get("/", (req, res) => {
    res.send("<h1>Server is Running</h1>")
})



//step-5 install your mongoose using this command=> npm i mongoose


//step-6 connect your database 
mongoose.connect("mongodb://localhost:27017/Backend", {}).then(() => {
    console.log("Database connect ho gya hai");
}).catch((error) => {
    console.log("error aa gai hai ", error)
})

// step-6 if you destructure the data from the req.body to aapko middleware use karni padegi
app.use(express.json());


//step- ab aapke route ko mount karna padega 
const CourseRoute = require("./routes/CourseRoute.js");
app.use("/api/course/v1",CourseRoute)