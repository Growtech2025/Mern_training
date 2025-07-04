
const User = require("../modals/User.js");
const bcrypt = require("bcrypt")
async function LoginController(request, response) {
    try {
        console.log("Login")
        //step-1 data nikal leaya 
        const { email, password } = request.body;
        console.log("email, password", email, password);

        //step-2 validations
        if (email === "" && password === "") {
            return response.status(201).json({
                message: "email and password empty nhi ho sakte hai ",
            })
        }


        // step-3 check kar lo jo ye email aai db me hai ya nhi 
        const isExist = await User.findOne({ email });
        console.log("Found user data", isExist)

        if (!isExist) {
            return response.status(201).json({
                message: "User nhi hai hamari website me",
            })
        }
        //step- matalb user mil gya hai password comapre kar lo
        console.log("ghjkld ",await bcrypt.compare(password, isExist.password))
        if (await bcrypt.compare(password, isExist.password)) {
            return response.status(200).json({
                message: "User login successfully",
                data: isExist
            })
        }
        else {
            response.status(400).json({
                message: "Bhai password to shi dalo ",
                success: false
            })

        }
    }
    catch (error) {
        console.log(error)
        return response.status(500).json({
            message: "Internal Server Errror",
            success: false,
        })
    }
}
module.exports = LoginController;