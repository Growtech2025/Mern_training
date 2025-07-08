function EnrollCourses(req, res) {
    console.log("we are at enroll controller ")

    try {
        const courseData = {
            courses: [
                {
                    name: "JavaScript for Beginners",
                    price: 49.99,
                    author: "John Doe"
                },
                {
                    name: "Advanced Python",
                    price: 59.99,
                    author: "Jane Smith"
                },
                {
                    name: "React and Redux",
                    price: 69.99,
                    author: "Emily Johnson"
                }
            ]
        };
        //h.w


        return res.status(200).json({
            message: "My  enroll All courses",
            data: courseData,
            success: true
        })
    }
    catch (error) {
        console.log("Error in enroll course controller", error)
        return res.status(500).json({
            message: "Errror ",
            success: false,
            error: error
        })
    }
}
module.exports = EnrollCourses;