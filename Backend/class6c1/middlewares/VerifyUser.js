const jwt = require("jsonwebtoken")
require("dotenv").config()
function VerifyUser(req, res, next) {
    try {

        const token = req.cookies.Session;
        if (!token) {
            return res.status(500).json({
                message: "Token not found  ",
                success: false
            })
        }


        //validate token 
        const decodeToken = jwt.verify(token, process.env.JWTSECRET);
        console.log("DEcode token", decodeToken)

        //next middleware me tabhi bhejna jab meri tokan ka time expired na ho 
        if (decodeToken.exp > decodeToken.iat) {
            req.user = decodeToken;
            next();
        }
        else {
            throw ("Token khatam ho gayi hai ")
        }

    }
    catch (error) {
        console.log("Token got expired ")
        return res.status(500).json({
            message: "Token got expired ",
            success: false
        })
    }
}

module.exports = VerifyUser;