const Course = require("../modals/Course.js")

//write your business Logic
exports.createCourse = async (req, res) => {
    try {
        //data ko body se nikalunga req ki body
        const { courseName, courseDuration } = req.body;
        console.log("ye data post man me body ke andar row ke andar json se aa rha hai")
        console.log(courseName, courseDuration)
        // modal create kar do 
        const course = await Course.create({ courseName, courseDuration });
        res.status(201).json({
            message: "Course created successfully",
            data: course

        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Ab me nhi chal paunga kuoki error aa gai hai",
            error: error
        })
    }
}