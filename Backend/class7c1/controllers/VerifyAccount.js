const EmailSend = require("../utils/EmailSend");
const User = require("../modals/User.js");

async function VerifyAccount(req, res) {
    try {
        //step-1 Get the data 
        const { email, otp } = req.body;
        //step-2 validation
        if (email === "" || otp === "") {
            return res.status(400).json({
                message: " all data empty please give value, VerifyAccount controller",
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

        //check kar lo kee user verified nhi hai agar nhi hai to mail send kar do 
        if (isUserExist.verifyUser === true) {
            return res.status(404).json({
                message: `Your account is already verified `,
                success: false,
            })
        }

        //ab aap otp match karo 
        if (otp !== isUserExist.otp) {
            return res.status(400).json({
                message: `Otp is incorrect. please enter correct otp`,
                success: false,
            })
        }


        //account verify kar do 
        isUserExist.verifyUser = true;
        isUserExist.otp = undefined;
        isUserExist.otpExpireTime = undefined;
        isUserExist.save();
        //mail send kar do successfull registerd 
        EmailSend(isUserExist.email, "SuccessFully Account Verified ", `Congralations ${isUserExist.fName} You have verified your account`)


        // suucess msg
        return res.status(200).json({
            message: `Your account successfully verified now you can login`,
            success: false,
        })
    }

    catch (error) {
        console.log("Error in Login controller", error);
        return res.status(500).json({
            message: "Internal server in Verify account  controller",
            success: false
        })
    }


}
module.exports = VerifyAccount;