const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Student = require("../modals/Student.js")
require("dotenv").config();
async function Login(req, res) {
    console.log("Login Controller")

    try {
        //step-1 body se data nikal lo 
        const { email, password } = req.body;

        //step-2 check kar lo user ka account hai ya nhi 
        //apply validation check email in db present or not if not do signup
        let isUserExist = await Student.findOne({ email });
        if (isUserExist === null || isUserExist === undefined) {
            return res.status(200).json({
                message: `This email ${email} is is not registered with us please sign up `,
                success: false
            })
        }

        //password compare kra lo 
        if (await bcrypt.compare(password, isUserExist.password)) {
            // generate the JWT Token 

            //JWT TOKEN GENERATE KARNE KEE STEPS 
            //step-1 PAYLOAD BNA LO- eska matlab apan jab authorixzatiobn karenge tab lagega
            const payload = {
                id: isUserExist._id,
                role: isUserExist.role,
                email: isUserExist.email
            }

            // step-2 generate JWT token 
            const token = jwt.sign(payload, process.env.JWTSECRET, { expiresIn: "300s" });
            isUserExist = isUserExist.toObject()
            isUserExist.token = token;
            isUserExist.password = null


            res.cookie("Session", token).status(200).json({
                message: "User Login Successfully",
                data: isUserExist,
                success: true
            })

        }
        else {
            return res.status(200).json({
                message: `Please enter correct password `,
                success: false
            })
        }
    }
    catch (error) {
        console.log("Login ke catch block me aa gaye hai es error kee vajah se ", error);
        return res.status(500).json({
            message: "Internal Server error ",
            success: false
        })
    }

}
module.exports = Login;