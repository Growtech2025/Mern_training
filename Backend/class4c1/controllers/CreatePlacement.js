
const Placement = require("../modals/Placement.js")
async function CreatePlacement(request, response) {
    try {
        const { Name, companyLocation, companyCTC } = request.body;
        console.log("here data", Name, companyLocation, companyCTC);

        if (Name === "" && companyLocation == "") {
            return response.status(201).json({
                message: "companyName and companyLocation empty nhi ho sakte hai ",
            })
        }
        const myPlacement = await Placement.create({ companyName:Name, companyLocation, companyCTC });
        response.status(201).json({
            message: "placement created sucessfully",
            data: myPlacement
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
module.exports = CreatePlacement;