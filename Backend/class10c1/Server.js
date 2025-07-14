const express = require("express");
require("dotenv").config();
const DatabaseConnect = require("./configuration/DatabaseConnect.js");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server ruinning at ${PORT}`)
})

DatabaseConnect();
const UserRoute = require("./routes/UserRoute.js")

app.use("/user", UserRoute)
const ProductRoute = require("./routes/ProductRoute.js")

app.use("/product", ProductRoute)

app.get("/", (req, res) => {
    res.send("home page ")
})