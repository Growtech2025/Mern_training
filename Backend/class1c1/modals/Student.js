const mongoose = require("mongoose");
const createStudent = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: String, required: true }
})
module.exports=mongoose.model("Student",createStudent);