const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fName: { type: String, maxLength: 20 },
    lName: { type: String, maxLength: 10 },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
})

module.exports = mongoose.model("User", userSchema);