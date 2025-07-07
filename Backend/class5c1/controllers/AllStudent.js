
const User = require("../modals/User.js");
async function AllStudent(request, response) {
    try {
        const isExist = await User.find({});
        return response.status(200).json({
            message: "All data fetched successfully",
            data: isExist
        })

    }
    catch (error) {
        console.log(error)
        return response.status(500).json({
            message: "Internal Server Errror",
            success: false,
        })
    }
}
module.exports = AllStudent;