const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    courseDiscription: { type: String, required: true },
    courseAuthor: { type: String },
    coursePrice: { type: Number, required: true },
    courseImage: { type: String, required: true },
    courseCreationDate: { type: Date, default: Date.now() }
})

module.exports = mongoose.model("Course", productSchema)