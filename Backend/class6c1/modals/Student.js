const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    fName: { type: String, required: true, maxLength: 25 },
    lName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    verifyUser: { type: Boolean, default: false },
    role: {
        type: String,
        enum: ['student', 'teacher'],
        default: 'student'
    },
})
module.exports = mongoose.model("Student", studentSchema);