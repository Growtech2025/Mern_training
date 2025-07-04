const Placement = require("../modals/Placement.js")
async function DeletePlacement(request, response) {
    try {
        const {id} = request.params;
        const myPlacement = await Placement.findByIdAndDelete({_id:id});
        response.status(201).json({
            message: "placement deleted sucessfully",
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
module.exports = DeletePlacement;