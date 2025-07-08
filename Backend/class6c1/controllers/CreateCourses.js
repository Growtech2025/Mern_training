function CreateCourses(req, res) {
    console.log("we are at createcourse controller ")
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
        return res.status(200).json({
            message: "My created all courses",
            data: courseData,
            success: true
        })
    }
    catch (error) {
        console.log("Error in Created course controller")
        return res.status(500).json({
            message: "Errror ",
            success: false
        })
    }
}
module.exports=CreateCourses;