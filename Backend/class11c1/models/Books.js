const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    bookName: { type: String, required: true },
    bookDiscription: { type: String, required: true },
    bookAuthor: { type: String },
    bookPrice: { type: Number, required: true },
    // bookImage: { type: String, required: true },
    bookCreationDate: { type: Date, default: Date.now() }
})

module.exports = mongoose.model("Books", bookSchema)