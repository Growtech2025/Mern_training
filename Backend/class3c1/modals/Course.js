const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    courseName: { type: String, maxLength: 50 },
    courseDuration: { type: Number, maxLength: 50 },
    courseDiscription: { type: String, maxLength: 100 },

})
module.exports = mongoose.model("Course", courseSchema)