const Course = require("../models/Course.js");
const UploadSubjectImage = require("../utils/UploadSubjectImage.js");
const cloudinary = require("cloudinary")
exports.createCourse = async (req, res) => {
    try {
        const { courseName, courseDiscription, coursePrice } = req.body;
        console.log("data coming in body")
        if (courseName === "" && courseDiscription === "" && coursePrice === "" && courseImage === "") {
            return res.status(400).json({
                message: "product name and their discription is required  ",
                success: false
            })
        }
        const courseImage = req.files.courseImage;
        if (!courseImage) {
            return res.status(400).json({
                message: "course IMAGE not found  ",
                success: false
            })
        }
        //upload in cloudinary
        const cloudinaryRes = await UploadSubjectImage(courseImage.tempPath)

        //get the secureurl from cloudinary response
        console.log("cloudinaery res", cloudinaryRes)

        //create course 
        const courseEntry = await Course.create({ courseName, courseDiscription, coursePrice, courseImage: cloudinaryRes.secureurl });
        console.log("new course ke andar data", courseEntry)

        //update in user schema

        return res.status(201).json({
            message: "Course created successfully  ",
            success: true,
            data: courseEntry
        })
    }
    catch (error) {
        console.log("Getting an error in create course controller");
        return res.status(500).json({
            message: "Internal server error in create course controller ",
            success: false
        })
    }
}

exports.getAllCourses = async (req, res) => {
    try {
        const allCourse = await Course.find({});
        return res.status(200).json({
            message: " All Courses Feteched successfully",
            success: true,
            data: allCourse
        })
    }
    catch (error) {
        console.log("Getting an error in All courses controller");
        return res.status(500).json({
            message: "Internal server error in All courses controller ",
            success: false
        })
    }
}

exports.getSingleCourse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(200).json({
                message: "course id not found ",
                success: false,
            })
        }
        const singleCourseDetails = await Course.findById({ _id: id });
        return res.status(200).json({
            message: "single Course Feteched successfully",
            success: true,
            data: singleCourseDetails
        })
    }
    catch (error) {
        console.log("Getting an error in single course controller");
        return res.status(500).json({
            message: "Internal server error in single course controller ",
            success: false
        })
    }
}

exports.updateSingleCourse = async (req, res) => {
    try {

        const { courseName, courseDiscription, coursePrice } = req.body;

        if (courseName === "" && courseDiscription === "" && coursePrice === "" && courseImage === "") {
            return res.status(400).json({
                message: "course name and course discription & price is required  ",
                success: false
            })
        }
        const courseImage = req.files.courseImage;
        if (!courseImage) {
            return res.status(400).json({
                message: "course IMAGE not found  ",
                success: false
            })
        }


        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                message: "course id not found ",
                success: false,
            })
        }


        //upload in cloudinary
        const cloudinaryRes = await UploadSubjectImage(courseImage.tempPath)
        //get the secureurl from cloudinary response

        await Course.findByIdAndUpdate({ _id: id }, { courseName, courseDiscription, coursePrice, courseImage: cloudinaryRes.secureurl });
        return res.status(200).json({
            message: "update course successfully",
            success: true,
        })
    }
    catch (error) {
        console.log("Getting an error in Update Course controller");
        return res.status(500).json({
            message: "Internal server error in Update Course controller ",
            success: false
        })
    }
}

exports.deleteSingleCourse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                message: "course id not found ",
                success: false,
            })
        }

        // check course by id 
        const isCoursePresent = await Course.findById({ _id: id })
        if (!isCoursePresent) {
            return res.status(404).json({
                message: "course  not found ",
                success: false,
            })
        }

        //step-1 delete product id from User model

        //step-2 ab course ko delete kar do
        await Course.findByIdAndDelete({ _id: id });
        return res.status(200).json({
            message: "Deleteed Course successfully",
            success: true,
        })
    }
    catch (error) {
        console.log("Getting an error in Delete course controller");
        return res.status(500).json({
            message: "Internal server error in Delete course controller ",
            success: false
        })
    }
}

