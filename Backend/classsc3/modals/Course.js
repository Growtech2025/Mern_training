// step-1 impport mongoose
const mongoose = require("mongoose")
//step-2 create schema 
const courseSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    courseDuration: { type: Number, required: true }
})

//step 3 export 
module.exports = mongoose.model("Course", courseSchema);