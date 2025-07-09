const bcrypt = require("bcrypt");
const User = require("../modals/User");
const EmailSend = require("../utils/EmailSend");
async function ResetPassword(req, res) {
    try {
        // data nikal lo
        const { email, newPassword, confirmPassword } = req.body;
        //step-2 validation
        if (email === "" || newPassword === "" || confirmPassword === "") {
            return res.status(400).json({
                message: " all data empty please give value, Reset Password controller",
                success: false
            })
        }

        //step-3 check kar lo email se account bna hai ya nhi bna hai
        const isUserExist = await User.findOne({ email });

        //agar nhi hai user to register karaenge
        if (!isUserExist) {
            return res.status(404).json({
                message: `Your email is ${email} not registered in our website,please Signup`,
                success: false,
            })
        }

        if (newPassword !== confirmPassword) {
            return res.status(404).json({
                message: `newpassword and confirm password values missmatch`,
                success: false,
            })
        }


        const id = isUserExist._id;
        let encryptPassword;

        try {
            encryptPassword = await bcrypt.hash(newPassword, 10);
        }
        catch (error) {
            console.log("Error in jab password ko encrpy kar rhe hai,ResetPassword controller", error);
            return res.status(500).json({
                message: "Internal server while hashing the password",
                success: false
            })
        }


        await User.findByIdAndUpdate({ _id: id }, { password: encryptPassword })
        EmailSend(isUserExist.email, "Password changed successfully", `Congralutions ${isUserExist.fName} you have 
            successfully changed password for ${email} this account`);

        return res.status(200).json({
            message: "You have successfully changed password ",
            success: true
        })

    }
    catch (error) {
        console.log("Error in Reset Password controller", error);
        return res.status(500).json({
            message: "Internal server in ResetPassword controller",
            success: false
        })
    }
}
module.exports = ResetPassword;