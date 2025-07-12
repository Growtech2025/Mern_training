//1
const express = require("express");
const app = express();
const fileuploader = require("express-fileupload")
const PORT = process.env.PORT || 4000

//attach middlewares 
app.use(express.json())
app.use(fileuploader({
    useTempFiles: true
}));




//2
app.listen(PORT, () => {
    console.log(`Server Run ${PORT}`)
})

// 3 
const DbConnection = require("./configure/DbConnection.js");
DbConnection();

// 4
app.get("/", (req, res) => {
    res.json({
        message: "Home page ",
        success: true
    })
})


//5
const SubjectRoute = require("./routes/SubjectRoute.js")
app.use("/subject", SubjectRoute)

