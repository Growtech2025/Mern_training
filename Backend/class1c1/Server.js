
// step-1 include kar lo express ko 
const express = require("express");
const mongoose = require("mongoose");
const createUser = require("./routes/createUser")

//create the instance of express
const app = express();
const port = 4000;

// app.use("/")
//start kar deaya server ko 
app.listen(port, () => {
    console.log(`Server Runnig at Look me ${port}`)
})
app.get("/", (req, res) => {
    res.send('<h1><i>I am running</i></h1>')
})
//Database connnectivity
// mongodb://localhost:27017/MorningBites
mongoose.connect("mongodb://localhost:27017/MorningBites", {}).then(() => {
    console.log("Mera database connect ho gya hai ");
}).catch((error) => {
    console.log("Me to fat gya kuoki network gya ", error);
    error.exit(1);
})


app.use("/api/v1", createUser)