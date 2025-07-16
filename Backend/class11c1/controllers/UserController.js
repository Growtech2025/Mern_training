const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const GenerateOtp = require("../utils/GenerateOtp.js");
const EmailSend = require("../utils/EmailSend.js");
exports.Signup = async (req, res) => {
    try {
        //get the data 
        const { name, age, email, password, role } = req.body

        //validate the data
        if (name === "" && age === "" && email === "" && password === "") {
            return res.status(400).json({
                message: "All data required",
                success: false
            })
        }
        console.log("Daa", name, age, email, password)
        //check user is already present or not in db

        const isUserPresent = await User.findOne({ email });
        if (isUserPresent) {
            return res.status(400).json({
                message: `This email id is already registered`,
                success: false
            })
        }

        //eccrypt the password 
        let encryptPassword;
        try {
            encryptPassword = await bcrypt.hash(password, 10)
        }
        catch (error) {
            return res.status(400).json({
                message: "Getting an error while hashing the password",
                success: false
            })
        }


        //generate the otp
        const myOtp = GenerateOtp();


        //send email
        EmailSend(email, "Account creation Notification",
            `Thank you so much for creating account in our website ${myOtp}`)

        // create account
        const newUser = await User.create({ name, age, email, password: encryptPassword, otp: myOtp, role })


        //return reponse
        return res.status(201).json({
            message: "Accouunt created successfully  ",
            success: true,
            data: newUser
        })
    }
    catch (error) {
        console.log("Getting an error in while creating user Account controller", error);
        return res.status(500).json({
            message: "Internal server error in while creating user Account controller ",
            success: false
        })
    }
}

exports.VerifyAccount = async (req, res) => {
    try {
        //get the data 
        const { email, otp } = req.body
        //validate the data
        if (email === "" && otp === "") {
            return res.status(400).json({
                message: "All data required",
                success: false
            })
        }
        //check user is  present or not in dbn if present than login
        const isUserPresent = await User.findOne({ email });
        if (!isUserPresent) {
            return res.status(400).json({
                message: `This email id is not registered with us`,
                success: false
            })

        }

        //match the otp 

        if (isUserPresent.otp !== otp) {
            return res.status(400).json({
                message: `Otp miss match please correct otp`,
                success: false
            })
        }


        //otp match ho gya hai so kya kar do verify kar do user ko 
        isUserPresent.verifyAccount = true;
        isUserPresent.otp = undefined;
        await isUserPresent.save()

        //send email 
        EmailSend(email, "Account Verified Successfully",
            `Thank you so much for verifying account in our website, go to login`)

        //return reponse 
        return res.status(200).json({
            message: "Your account verify successfully, Now you can Login",
            success: true
        })
    }
    catch (error) {
        console.log("Getting an error in Verify user account controller", error);
        return res.status(500).json({
            message: "Internal server error in Verify user account controller ",
            success: false
        })
    }
}

exports.Login = async (req, res) => {
    try {
        //get the data 
        const { email, password } = req.body
        //validate the data
        if (email === "" && password === "") {
            return res.status(400).json({
                message: "All data required",
                success: false
            })
        }
        //check user is  present or not in dbn if present than login
        const isUserPresent = await User.findOne({ email });
        if (!isUserPresent) {
            return res.status(400).json({
                message: `This email id is not registered with us`,
                success: false
            })

        }

        //check user account is verify or not 
        if (isUserPresent.verifyAccount === false) {
            return res.status(400).json({
                message: `You are not a verify user please verify`,
                success: false
            })
        }



        //match the password 
        if (await bcrypt.compare(password, isUserPresent.password)) {

            //create payload
            const payload = {
                id: isUserPresent._id,
                role: isUserPresent.role,
                email: isUserPresent.email
            }
            //generate the token 

            const token = jwt.sign(payload, "1234", { expiresIn: "1h" });

            //return reponse  in the form of cookie
            return res.cookie("token", token).status(200).json({
                message: "User Login Successfully ",
                success: true
            })
        }
        else {
            return res.status(400).json({
                message: "Password is incorrect ",
                success: false
            })
        }



    }
    catch (error) {
        console.log("Getting an error in Login controller", error);
        return res.status(500).json({
            message: "Internal server error in Login controller ",
            success: false
        })
    }
}

exports.ResetPassword = async (req, res) => {
    try {
        //get the data 
        const { email, newpassword, confirmpassword } = req.body

        //validate the data
        if (email === "" && newpassword === "" && confirmpassword === "") {
            return res.status(400).json({
                message: "All data required",
                success: false
            })
        }

        //check user is already present or not in db
        //check user is  present or not in dbn if present than login
        const isUserPresent = await User.findOne({ email });
        if (!isUserPresent) {
            return res.status(400).json({
                message: `This email id is not registered with us`,
                success: false
            })

        }
        //match the password 
        if (newpassword !== confirmpassword) {
            return res.status(400).json({
                message: `password missmatch please give the same value in newpassword and cofirmpassword `,
                success: false
            })
        }

        //eccrypt the password 

        let encryptPassword;
        try {
            encryptPassword = await bcrypt.hash(newpassword, 10)
        }
        catch (error) {
            console.log("error hash", error)
            return res.status(400).json({
                message: "Getting an error while hashing the password",
                success: false
            })
        }



        //store in db
        await User.findByIdAndUpdate({ _id: isUserPresent._id }, { password: encryptPassword })


        //send email
        EmailSend(email, "Password Reset Successfully",
            `Thank you so much for resetting password now you can login`)

        //return reponse 
        return res.status(200).json({
            message: "Password changed successfully",
            success: true
        })
    }
    catch (error) {
        console.log("Getting an error in Reset password controller ", error);
        return res.status(500).json({
            message: "Internal server error in Reset password controller",
            success: false
        })
    }
}

exports.ResendOtp = async (req, res) => {
    try {
        //get the data 
        const { email } = req.body
        //validate the data
        if (email === "") {
            return res.status(400).json({
                message: "All data required",
                success: false
            })
        }
        //check user is  present or not in dbn if present than login
        const isUserPresent = await User.findOne({ email });
        if (!isUserPresent) {
            return res.status(400).json({
                message: `This email id is not registered with us`,
                success: false
            })
        }

        //generate the otp
        const newotp = GenerateOtp()

        //send email
        EmailSend(email, "Resend OTP Notification",
            `This is your one time password for verifying account ${newotp}`)

        //update user schema 
        await User.findByIdAndUpdate({ _id: isUserPresent.id }, { otp: newotp })

        //return reponse 
        return res.status(200).json({
            message: " Otp send Successfully",
            success: true,
        })
    }
    catch (error) {
        console.log("Getting an error in Reset otp  controller", error);
        return res.status(500).json({
            message: "Internal server error in  Reset otp  controller",
            success: false
        })
    }
}

exports.DeleteAcount = async (req, res) => {
    try {
        //get the data 
        const { email } = req.body
        //validate the data
        if (email === "") {
            return res.status(400).json({
                message: "All data required",
                success: false
            })
        }
        //check user is  present or not in dbn if present than login
        const isUserPresent = await User.findOne({ email });
        if (!isUserPresent) {
            return res.status(400).json({
                message: `This email id is not registered with us`,
                success: false
            })
        }
        await User.findOneAndDelete({ email })


        EmailSend(email, "Account Deleted Notification",
            `You have deleted ur account`)

        //return reponse 
        return res.status(200).json({
            message: "Account deleted successfully",
            success: true,
        })
    }
    catch (error) {
        console.log("Getting an error in Reset otp  controller", error);
        return res.status(500).json({
            message: "Internal server error in  Reset otp  controller",
            success: false
        })
    }
}

exports.Logout = async (req, res) => {
    try {
        //return reponse 
        console.log("Logout controller")
        // console.log("request", req)
        
       res.clearCookie("token")
        return res.status(200).json({
            message: "Account logout successfully",
            success: true,
           
        })
    }
    catch (error) {
        console.log("errpr",error)
        return res.status(500).json({
            message: "Internal server error in  Logout  controller",
            success: false
        })
    }

}
