const Course = require("../models/Course.js");
const User = require("../models/User.js")
const UploadSubjectImage = require("../utils/UploadSubjectImage.js");
exports.createCourse = async (req, res) => {
    try {
        const { courseName, courseDiscription, coursePrice } = req.body;
        // console.log("req",req)
        console.log("Course Data coming from body", courseName, courseDiscription, coursePrice)
        if (courseName === "" && courseDiscription === "" && coursePrice === "") {
            return res.status(400).json({
                message: "product name and their discription is required  ",
                success: false
            })
        }
        const courseImage = req.files.courseImage;
        console.log("files me photo", courseImage)
        if (!courseImage) {
            return res.status(400).json({
                message: "course IMAGE not found  ",
                success: false
            })
        }
        //upload in cloudinary
        const cloudinaryRes = await UploadSubjectImage(courseImage.tempFilePath)

        //get the secureurl from cloudinary response
        // console.log("cloudinaery res", cloudinaryRes)

        //set the author name in course so we need user details
        const LoginuserId = req.user.id;
        const LoginUserData = await User.findById({ _id: LoginuserId })
        console.log("Data of user", LoginUserData)

        //create course 
        const courseEntry = await Course.create({ courseName, courseDiscription, courseAuthor: LoginUserData.name, coursePrice, courseImage: cloudinaryRes.secure_url });
        // console.log("new course ke andar data", courseEntry)


        //update user schema bcs es user ne course create keaya hai
        await User.findByIdAndUpdate({ _id: LoginuserId }, { $push: { myCreatedCourses: courseEntry._id } })

        return res.status(201).json({
            message: "Course created successfully  ",
            success: true,
            data: courseEntry
        })
    }
    catch (error) {
        console.log("Getting an error in create course controller", error);
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
        console.log("course id", id)
        if (!id) {
            return res.status(200).json({
                message: "course id not found ",
                success: false,
            })
        }
        const singleCourseDetails = await Course.findById({ _id: id });
        if (!singleCourseDetails) {
            return res.status(400).json({
                message: `Course id ${id} is not exist sorry no course found`,
                success: false,

            })
        }
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

        //get the course id from url parameter
        const { id } = req.params;
        console.log("Course id", id)
        if (!id) {
            return res.status(400).json({
                message: "course id not found ",
                success: false,
            })
        }

        const { courseName, courseDiscription, coursePrice } = req.body;

        if (courseName === "" || courseDiscription === "" || coursePrice === "") {
            return res.status(400).json({
                message: "course name and course discription & price is required  ",
                success: false
            })
        }


        let courseImage;
        let cloudinaryRes;
        if (req.files !== null) {
            console.log("  yha aaaeh ho ")
            courseImage = req.files.courseImage;
        }

        if (courseImage === undefined) {
            console.log("yha aaya")
            await Course.findByIdAndUpdate({ _id: id }, { courseName, courseDiscription, coursePrice });
            return res.status(200).json({
                message: "update course successfully",
                success: true,
            })
        }
        else {
            if (courseImage !== null || courseImage !== undefined) {
                //upload in cloudinary
                cloudinaryRes = await UploadSubjectImage(courseImage.tempFilePath)
                //get the secureurl from cloudinary response

            }



            if (cloudinaryRes !== null || cloudinaryRes !== undefined) {

                await Course.findByIdAndUpdate({ _id: id }, { courseName, courseDiscription, coursePrice, courseImage: cloudinaryRes.secure_url });
                return res.status(200).json({
                    message: "update course successfully",
                    success: true,
                })
            }



        }
    }
    catch (error) {
        console.log("Getting an error in Update Course controller", error);
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
       
        const loginuserId = req.user.id;
        await User.findByIdAndUpdate({ _id: loginuserId }, { $pull: { myEnrollCourses: isCoursePresent._id } })


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
exports.myCreatedCourses = async (req, res) => {
    try {
        const userId = req.user.id;
        if (!userId) {
            return res.status(400).json({
                message: "user id not found ",
                success: false,
            })
        }

        // check course by id 
        const isUserPresent = await User.findById({ _id: userId }).populate({ path: "myCreatedCourses" });
        if (!isUserPresent) {
            return res.status(404).json({
                message: `this course id ${userId} is invalid`,
                success: false,
            })
        }

        return res.status(200).json({
            message: "My Created all Course fetched successfully",
            success: true,
            data: isUserPresent
        })
    }
    catch (error) {
        console.log("Getting an error in my created  courses controller");
        return res.status(500).json({
            message: "Internal server error in my created course controller ",
            success: false
        })
    }
}
exports.EnrollCourse = async (req, res) => {
    try {
        const { courseId } = req.params;
        console.log("course id",req)
        if (!courseId) {
            return res.status(400).json({
                message: "course id not found ",
                success: false,
            })
        }

        //test ase jo course enroll ho gya ab enroll nhi hoga test case 
        const id = req.user.id;
        const presentuse = await User.findById({ _id: id });
        const myEnrollCourses = presentuse.myEnrollCourses[0];
        console.log("enroll idd", myEnrollCourses)

        if (courseId == myEnrollCourses) {
            return res.status(200).json({
                message: "You have already enroll this course",
                success: false
            })
        }

        // check course by id 
        const isCoursePresent = await Course.findById({ _id: courseId })
        if (!isCoursePresent) {
            return res.status(404).json({
                message: `this course id ${courseId} is invalid`,
                success: false,
            })
        }

        const loginuserId = req.user.id;
        await User.findByIdAndUpdate({ _id: loginuserId }, { $push: { myEnrollCourses: isCoursePresent._id } })

        //update the user schema

        return res.status(200).json({
            message: "User Enrolled Course successfully",
            success: true,
        })
    }
    catch (error) {
        console.log("Getting an error in enroll course controller", error);
        return res.status(500).json({
            message: "Internal server error in enroll course controller ",
            success: false
        })
    }
}

