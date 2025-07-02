const Course = require("../modals/Course.js")
async function getCourseByParameter(req, res) {
    try {
        const { id } = req.params;
        console.log("we are getting id from url parameter",id)

        const response = await Course.findById(id);
        console.log(response)
        console.log("course name",response.couserName)
        res.status(201).json({
            message: "single course fetched successfully",
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

module.exports = getCourseByParameter;