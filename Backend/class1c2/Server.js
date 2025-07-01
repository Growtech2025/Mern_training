const express = require("express");
const mongoose = require("mongoose");
const createRoute=require("./routes/createRoute.js")
const app = express();
const port = 4500;
console.log("We are in server.js file ")
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})


//data ko body se nikalne ke leaye
app.use(express.json())


app.get("/", (req, res) => {
    res.send("<h1>This is our backend project</h1>")
})

//Data base connection
mongoose.connect("mongodb://localhost:27017/Company", {}).then(() => {
    console.log("Database connnection done")
}).catch((errr) => {
    console.log("Error aa gai hai ", errr);
})

//attach your route here
app.use("/api/v1",createRoute);