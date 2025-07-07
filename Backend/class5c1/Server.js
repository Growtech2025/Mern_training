//step-1 Import express
const express = require("express");
require("dotenv").config();
const dbConnection = require("./configuration/Database.js")

//step-2 create instance
const app = express();

const port = process.env.PORT || 6000;

//step-3 start server
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})

// database connection done
dbConnection();


//step-5 demo page url 
app.get("/", (request, response) => {
    response.send("Home Page")
})

// step-6 middlewarer to parse data 
app.use(express.json());


//step-7 mount route
const UserRoutes = require("./routes/UserRoutes.js");
//step- mount your routes folder here
app.use("/api/v1", UserRoutes)


