const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    couserName: { type: "String", required: true },
    courseDuration: { type: "number", required: true },
    couserAuthor: { type: "String", required: true },
    courseRating: { type: "String", required: true }

});

module.exports = mongoose.model("Course", courseSchema);