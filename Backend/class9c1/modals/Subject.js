const mongoose = require("mongoose");
const { type } = require("os");
const subjectSchema = new mongoose.Schema(
    {
        subjectName: { type: String },
        subjectAuthor: { type: String },
        subjectPrice: { type: Number },
        subjectImage: { type: String },
    }
)
module.exports=mongoose.model("Subject",subjectSchema)