const express = require("express");
require("dotenv").config()
const cookieParser = require('cookie-parser');

//step-1 instance create
const app = express();

const PORT = process.env.PORT || 4500
//step-2 start server
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})

app.use(cookieParser())

//step-3 use middlewares to parse data from body
app.use(express.json())


//step-4 Database connectivity
const DataBaseConncetion = require("./configuration/DataBaseConncetion.js");
DataBaseConncetion();


//step-5 Mount your routes here 
const StudentRoutes = require("./routes/StudentRoutes.js");
app.use("/student", StudentRoutes)


//step-6 make demo page to show on the UI
app.get("/", (req, res) => {
    res.send("This is our home page")
})


//to implement email functionality 
// step-1 install nodemailer
const nodemailer = require("nodemailer");


//step-2 create transporter
// Create a test account or replace with real credentials.
// const transporter = nodemailer.createTransport({
//      host: "smtp.gmail.com",
//     port: 465,
//     secure: true, 
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EPASS
//     },
// });

// function senDkARDOeMIAL(to, subject, msg) {
//     transporter.sendMail({
//         to: to,
//         subject: subject,
//         text: msg,
//         html:`<h1 style="color:red;">Maja hee gya hai laddu khane me </h1>`

//     })
// }

// senDkARDOeMIAL("avirajbhaliya@gmail.com", "Laddu bat rhe hai", "Harsh ko le aana ")


// OTP GENERATR RHE HAI 
// STEP-1 install crypto

//step-2 import kar lo 
const crypto = require("crypto");

function dekhRheHOvINODEotpaaRHAhAI() {
    return crypto.randomInt(1000, 9999).toString();
}

//CALL FUNCTION TO GENERATE OTP
console.log(dekhRheHOvINODEotpaaRHAhAI()) 