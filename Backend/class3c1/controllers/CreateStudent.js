const Student = require("../modals/Student.js")
async function CreateStudent(req, res) {
    try {
        const { studentName, studentAge, studentDiscription } = req.body;

        //testing kar lo
        if (studentName === "" && studentDiscription === "") {
            res.status(400).json({
                message: "studentName and studentDiscription khali nhi ho sakta hai "
            })
        }


        //Insert record in db
        const dbResponse = await Student.create({ studentName, studentAge, studentDiscription });
        res.status(201).json({
            message: "Student registered successfully ",
            data: dbResponse
        })
    }
    catch (error) {
        console.log("Error ", error)
        res.status(500).json({
            message: "Internal server is coming"
        })
    }
}

module.exports = CreateStudent; 