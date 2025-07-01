const Student = require("../modals/Student.js")
exports.createUser = (req, res) => {
    try{
            console.log("Har Har Mahadev")
            res.status(201).json({
                message:"Succesful Created"
            })

    }
    catch(error){
        console.log("Error aa gayi hai",error)
    }
};