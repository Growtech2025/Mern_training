
const jwt = require("jsonwebtoken");
require("dotenv").config();
async function StudentMiddleware(request, response, next) {
    try {
        console.log("me to student middleware me hu",request.user.role)
        const role = request.user.role
        //validations
        if (role === "student") {
            next()
        }
        else {
            return response.status(404).json({
                message: "Aap kon hai aapko allowed access karna",
                success: false,
            })
        }

    }
    catch (error) {
        console.log(error)
        return response.status(500).json({
            message: "Nikal Jaao",
            success: false,
        })
    }
}
module.exports = StudentMiddleware;