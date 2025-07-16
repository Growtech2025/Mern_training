const express = require("express");
require("dotenv").config();
const DatabaseConnect = require("./configuration/DatabaseConnect.js");
const cookieParser = require("cookie-parser")
const app = express();

const PORT = process.env.PORT || 5000;
const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp"
}))
app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Server ruinning at ${PORT}`)
})


//sabhi routes file ko nikal lo 
const AuthRoute = require("./routes/AuthRoute.js")
const CourseRoute = require("./routes/CourseRoute.js")
const StudentRoute = require("./routes/StudentRoute.js")



DatabaseConnect();


//sabhi routes ko mount kar do 


app.use("/auth/api/v1", AuthRoute)
app.use("/course/api/v1", CourseRoute)
app.use("/all/api/v1", StudentRoute)



app.get("/", (req, res) => {
    res.send("home page ")
})