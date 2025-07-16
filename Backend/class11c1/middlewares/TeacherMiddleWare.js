
const jwt = require("jsonwebtoken");
require("dotenv").config();
async function StudentMiddleware(request, response, next) {
    try {
        console.log("me to Teacher middleware me hu", request.user.role)
        const role = request.user.role
        //validations
        if (role === "teacher") {
            next()
        }
        else {
            return response.status(404).json({
                message: "You are student not to work with course CRUD",
                success: false,
            })
        }

    }
    catch (error) {
        console.log(error)
        return response.status(500).json({
            message: "Pahli fursat me niklo",
            success: false,
        })
    }
}
module.exports = StudentMiddleware;