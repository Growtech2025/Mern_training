const User = require("../models/User.js");
exports.createUser = async (req, res) => {
    try {
        const { name, age, email } = req.body;
        console.log("data coming in body in User controller me ", name, age, email)
        if (name === "" && email === "") {
            return res.status(400).json({
                message: "user name and their email is required  ",
                success: false
            })
        }


        const uEntry = await User.create({ name, age, email });
        return res.status(201).json({
            message: "Product created successfully  ",
            success: true,
            data: uEntry
        })
    }
    catch (error) {
        console.log("Getting an error in create user controller");
        return res.status(500).json({
            message: "Internal server error in create user controller ",
            success: false
        })
    }
}

exports.getAllUser = async (req, res) => {
    try {
        const uEntry = await User.find({});

        return res.status(200).json({
            message: " ALL User Feteched successfully",
            success: true,
            data: uEntry
        })
    }
    catch (error) {
        console.log("Getting an error in get all user controller", error);
        return res.status(500).json({
            message: "Internal server error in get all user controller ",
            success: false
        })
    }
}
exports.getOneUser = async (req, res) => {
    try {
        const {id}=req.params;
        const uEntry = await User.findById({_id:id}).populate({path:"myProductDetails"});
        return res.status(200).json({
            message: "One User Feteched successfully",
            success: true,
            data: uEntry
        })
    }
    catch (error) {
        console.log("Getting an error in One User  controller", error);
        return res.status(500).json({
            message: "Internal server error in One User controller ",
            success: false
        })
    }
}

exports.UpdateOneUser = async (req, res) => {
    try {
        const {id}=req.params;
              const { name, age, email } = req.body;
        const uEntry = await User.findByIdAndUpdate({_id:id},{ name, age, email});
        return res.status(200).json({
            message: "Update User Feteched successfully",
            success: true,
            data: uEntry
        })
    }
    catch (error) {
        console.log("Getting an error in Update User controller", error);
        return res.status(500).json({
            message: "Internal server error in Update User controller ",
            success: false
        })
    }
}


exports.DeleteOneUser = async (req, res) => {
    try {
        const {id}=req.params;
       
        const uEntry = await User.findByIdAndDelete({_id:id});
        return res.status(200).json({
            message: " User deleted successfully",
            success: true,
        })
    }
    catch (error) {
        console.log("Getting an error in delete User controller", error);
        return res.status(500).json({
            message: "Internal server error in delete User controller ",
            success: false
        })
    }
}