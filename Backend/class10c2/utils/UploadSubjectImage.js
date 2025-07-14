const cloudinary=require("../configuration/CloudinarySetup.js")
async function UploadSubjectImage(filePath) {
    console.log("File jo controller se aa rhi hai",filePath)
    return await cloudinary.uploader.upload(filePath)
}
module.exports = UploadSubjectImage;