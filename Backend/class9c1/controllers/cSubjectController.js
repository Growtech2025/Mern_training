const Subject = require("../modals/Subject.js");
const UploadSubjectImage = require("../utils/UploadSubjectImage.js")
async function cSubjectController(req, res) {
    try {
        const {
            subjectName, subjectAuthor, subjectPrice } = req.body;
        console.log("Data from form", subjectName, subjectAuthor, subjectPrice)
        // console.log("i am in subject controller")


        // image nikal lo 
        const subjectImage = req.files.subjectImage
        // H.w destructuring vala aapko karn ahi
        // console.log("Image also we can read", subjectImage.tempFilePath)
        const result = await UploadSubjectImage(subjectImage.tempFilePath)
        // console.log("Cloudinary jo response deaya hai ", result)
        const subjectEntry = await Subject.create({ subjectName, subjectAuthor, subjectPrice, subjectImage: result.secure_url })
        return res.status(201).json({
            message: "Done",
            success: true,
            data: subjectEntry
        })
    }
    catch (error) {
        console.log("Subject controller error", error)
        return res.status(500).json({
            message: "Gettting error in subject controller",
            success: false
        })
    }
}

module.exports = cSubjectController;