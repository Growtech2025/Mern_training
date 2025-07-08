const Student = require("../modals/Student.js")
const bcrypt = require("bcrypt");
async function Signup(req, res) {

    try {
        //body se data nikal lo 
        const { fName, lName, email, password, role } = req.body;

        //apply validation check email in db present or not if not do signup
        const isUserExist = await Student.findOne({ email });
        if (isUserExist) {
            return res.status(200).json({
                message: `This email ${email} already in db enter other email id`,
                success: false
            })
        }


        //insert Data in db kuoki db me entry nhi hai es email kee jo upar se aa rhi hai 
        // password ko thoda encrypt kar denge jis se password db me normal na dikhe
        let maskPassword;
        try {
            maskPassword = await bcrypt.hash(password, 10);
        }
        catch (error) {
            console.log("Password ko encrypt karne ke time par error aa gayi hai  ", error);
            return res.status(500).json({
                message: "Internal Server error ",
                success: false
            })
        }


        const newUser = await Student.create({ fName, lName, email, password: maskPassword, role });
        //at the end return response 
        return res.status(201).json({
            message: "User Signup Successfully",
            data: newUser,
            success:true
        })

    }
    catch (error) {
        console.log("Signup ke catch block me aa gaye hai es error kee vajah se ", error);
        return res.status(500).json({
            message: "Internal Server error ",
            success: false
        })
    }

}
module.exports = Signup;