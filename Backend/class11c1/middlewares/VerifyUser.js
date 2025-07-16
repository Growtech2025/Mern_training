
const jwt = require("jsonwebtoken");
require("dotenv").config();
async function VerifyUser(request, response, next) {
    console.log("we are at")
    try {
        
        const token = request.cookies.token;
        // console.log("This Token is valid ????", token)
        if(token===null || token===undefined){
             return response.status(404).json({
                message: "Please Login",
                success: false,
            })
        }
        //validations
        if (!token) {
            return response.status(404).json({
                message: "Token not found",
                success: false,
            })
        }

        //chalo ab token me kuch hai esko check karo 
        const decodeData = jwt.verify(token, process.env.JWTSECRET);
        // console.log("Decode data", decodeData);
        if (!decodeData) {
            return response.status(404).json({
                message: "Token apki shi nhi hai ",
                success: false,
            })
        }

        request.user = decodeData
        // console.log("this is decode data", decodeData)
        next();
    }
    catch (error) {
        console.log(error)
        return response.status(500).json({
            message: "Token got expired",
            success: false,
        })
    }
}
module.exports = VerifyUser;