
const Placement = require("../modals/Placement.js")
async function AllPlacement(request, response) {
    try {
       const All=await Placement.find().sort({companyCTC:1}).limit(2);
        response.status(201).json({
            message: "placement created sucessfully",
            data: All
        })
    }
    catch (error) {
        response.status(500).json({
            message: "Internal Server Errror",
            success: false,

        })
    }
}
module.exports =  AllPlacement;