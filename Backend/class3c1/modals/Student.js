const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    studentName: { type: String, maxLength: 50 },
    studentAge: { type: Number, maxLength: 50 },
    studentDiscription: { type: String, maxLength: 100 },

})
module.exports = mongoose.model("Student", studentSchema)