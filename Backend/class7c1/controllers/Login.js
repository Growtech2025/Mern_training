const User = require("../modals/User.js");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
require("dotenv").config()
async function Login(req, res) {
    try {
        //step-1 Get the data 
        const { email, password } = req.body;

        //step-2 validation
        if (email === "" || password === "") {

            return res.status(400).json({
                message: "You have to fill the all data empty data is not allowed, Login controller",
                success: false
            })
        }

        //step-3 check kar lo email se account bna hai ya nhi bna hai
        const isUserExist = await User.findOne({ email });

        //agar nhi hai user to register karaenge
        if (!isUserExist) {
            return res.status(404).json({
                message: `Your email is ${email} not registered in our website`,
                success: false,
            })
        }

        //check kar lo kee user verified nhi hai agar nhi hai to mail send kar do 
        if (isUserExist.verifyUser === false) {
            return res.status(404).json({
                message: `Please verify your account before login`,
                success: false,
            })
        }

        //step-4 Login kar lena aap Password match kra lo
        if (await bcrypt.compare(password, isUserExist.password)) {
            //ab tum varify user ho ab ham JWt token generate karenge 

            //step-1 Payload bna lo
            const Payload = {
                email: isUserExist.email,
                role: isUserExist.role,
                id: isUserExist._id
            }

            //step 2 generate token ko kar do time bhi mention kar dena ki kab token expire hoga
            const token = jwt.sign(Payload, process.env.JWTSECRET, { expiresIn: "1h" })


            // bhai ab hame response return karna hoga kis roop ->cookie
            return res.cookie("Session", token).status(200).json({
                message: "Login successfully",
                success: true,
                data: isUserExist
            })


        }
        else {
            return res.status(400).json({
                message: `You have entered galat password,please enter correct one`,
                success: false,
            })
        }


    }
    catch (error) {
        console.log("Error in Login controller", error);
        return res.status(500).json({
            message: "Internal server in Login controller",
            success: false
        })
    }
}
module.exports = Login;