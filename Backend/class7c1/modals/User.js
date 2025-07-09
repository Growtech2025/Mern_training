const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
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
    otp: { type: String, maxLength: 6 },
    otpExpireTime: { type: Date }
})
module.exports = mongoose.model("User", userSchema);