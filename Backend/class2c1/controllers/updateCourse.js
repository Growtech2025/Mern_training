const Course = require("../modals/Course.js")
async function updateCourse(req, res) {
    try {
        const { id } = req.params
        console.log("id we are getting",id)
        const { couserAuthor } = req.body;
        console.log("author value", couserAuthor);
        const response = await Course.findByIdAndUpdate({_id:id},{couserAuthor});
        console.log(response)
        console.log("course name", response.couserName)
        res.status(201).json({
            message: "Course updated successfully",
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

module.exports = updateCourse;