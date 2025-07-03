const express = require("express");
require("dotenv").config()
const StudentRoute=require("./routes/StudentRoute.js")

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})



//DB Connection
const dbConnection=require("./configuration/DbConnect.js")
//call here
dbConnection()


//middleware
app.use(express.json())

//Link karo routes
app.use("/student",StudentRoute)

app.get("/", (request, response) => {
    response.send("ham to chal gaye hai ")
})




