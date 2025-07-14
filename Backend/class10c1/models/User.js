const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    email: { type: String },
    myProductDetails: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
})

module.exports = mongoose.model("User", userSchema)