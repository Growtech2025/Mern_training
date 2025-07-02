const Course = require("../modals/Course.js")
async function createCourse(req, res) {
    try {
        const { couserName, courseDuration, couserAuthor, courseRating } = req.body;
        //this responsible for creating collection in db
        const response = await Course.create({ couserName, courseDuration, couserAuthor, courseRating });
        res.status(201).json({
            message: "Course created successfully",
            data: response
        })

    }
    catch (error) {
        console.log("we are getting an error ", error);
        res.status(500).json({
            message: "Something has wrongs",
            error: error
        })
    }
}

module.exports=createCourse;