const User = require("../modals/userModal.js")
exports.createController = async (req, res) => {
    try {
        console.log("Hey")
        const { name, age, email } = req.body;
        console.log("print kar rha hu apne data ko", name, age, email);
        // ab ham collection create karnenge;
        const status = await User.create({ name, age, email })
        res.status(201).json({
            message: "Item created successfully",
            data: status
        })
    }
    catch (error) {
        console.log("Controller me error ", error)
    }
}