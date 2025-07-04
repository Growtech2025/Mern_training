
const User = require("../modals/User.js");
const bcrypt = require("bcrypt")
async function CreateUser(request, response) {
    try {
        const { fname, lname, age, email, password } = request.body;
        console.log("here data", fname, lname, age, email, password);

        if (fname === "" && lname === "" && email === "") {
            return response.status(201).json({
                message: "fname, lname and age empty nhi ho sakte hai ",
            })
        }
        const isExist = await User.findOne({ email });


        if (isExist) {
            return response.status(201).json({
                message: `This email ${email}  is already registered use different one `,
            })
        }

        //hash the password
        let encryptPassword;
        try {
            encryptPassword = await bcrypt.hash(password, 10);
        }
        catch (error) {
            response.status(400).json({
                message: "Getting an error while encrypting the password",
                success: false
            })
        }

        const UserCreated = await User.create({ fname, lname, age, email, password: encryptPassword });
        response.status(201).json({
            message: "Account Created Successfully",
            data: UserCreated
        })
    }
    catch (error) {

        console.log(error)
        return response.status(500).json({
            message: "Internal Server Errror",
            success: false,

        })

    }
}
module.exports = CreateUser;