const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    otp: { type: String },
    verifyAccount: { type: Boolean, default: false },
    myEnrollCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ],
    myCreatedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ],
    role: {type:String, enum: ["student", "teacher", "admin"], default: "student" }
})

module.exports = mongoose.model("User", userSchema)