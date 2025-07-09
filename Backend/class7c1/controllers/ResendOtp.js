const GenerateOtp = require("../utils/GenerateOtp.js")
const EmailSend = require("../utils/EmailSend");
const User = require("../modals/User.js");

async function ResendOtp(req, res) {
    try {
        console.log("jklfsdh")
        //step-1 Get the data 
        const { email } = req.body;

        //step-2 validation
        if (email === "") {

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

        //sab badiya hai otp generate kar do 
        const otp = GenerateOtp();

        //mail send kar do ab 
        EmailSend(email, "Resend Otp for Acc Verification", `Hello ${isUserExist.fName} this is otp for account verification ${otp}`)

        // return response 
        return res.status(200).json({
            message: "Otp send successfully ",
            success: true
        })


    } catch (error) {
        console.log("Error in Resend Otp controller", error);
        return res.status(500).json({
            message: "Internal server in Resend Otp controller",
            success: false
        })
    }

}
module.exports = ResendOtp;