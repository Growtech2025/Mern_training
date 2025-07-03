const mongoose = require("mongoose");
const incomeSchema = new mongoose.Schema({
    income: { type: Number },
    incomeDepartment: { type: String, maxLength: 50 },
})
module.exports = mongoose.model("Income", incomeSchema)