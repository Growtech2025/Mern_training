const mongoose = require("mongoose");
const placementSchema = new mongoose.Schema({
    companyName: { type: String},
    companyLocation: { type: String, maxLength: 50 },
    companyCTC: { type: Number, required: true }
})

module.exports = mongoose.model("Placement", placementSchema);