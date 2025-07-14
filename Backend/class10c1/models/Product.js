const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    productName: { type: String },
    productCreateDate: { type: Date ,default:Date.now()},
    productInfo: { type: String }
})

module.exports = mongoose.model("Product", productSchema)