const Placement = require("../modals/Placement.js")

async function updatePlacement(req, res) {
    try {
        const { id } = req.params;
        const { companyName } = req.body;
        const updatePlace = await Placement.findByIdAndUpdate(id, { companyName: companyName },{new:true})
        res.status(200).json({
            message: "Update Single placement sucessfully Updated",
            data: updatePlace
        })
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = updatePlacement;