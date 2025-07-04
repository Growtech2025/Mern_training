const Placement = require("../modals/Placement.js")
async function GetPlacement(request, response) {
    try {
        const {id} = request.params;
        const myPlacement = await Placement.findById({_id:id});
        response.status(201).json({
            message: "Single got placement  sucessfully",
            data: myPlacement
        })
    }
    catch (error) {
        response.status(500).json({
            message: "Internal Server Errror",
            success: false,
        })
    }
}
module.exports = GetPlacement;