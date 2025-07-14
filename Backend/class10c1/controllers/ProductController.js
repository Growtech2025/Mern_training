const Product = require("../models/Product.js");
const User = require("../models/User.js")
exports.createProduct = async (req, res) => {
    try {
        const { productName, productCreateDate, productInfo, userId } = req.body;
        console.log("data coming in body")
        if (productName === "" && productInfo === "") {
            return res.status(400).json({
                message: "product name and their discription is required  ",
                success: false
            })
        }

        //step-1 product create kar leaya hai
        const pEntry = await Product.create({ productName, productCreateDate, productInfo });
        console.log("new product ke andar data", pEntry)

        //step-2 es product kee id ko jis ne create keaya hai uske andar jo  dal do 
        // await User.findByIdAndUpdate({ _id: userId }, { myProductDetails: pEntry._id });


        await User.findByIdAndUpdate({ _id: userId }, { $push: { myProductDetails: pEntry._id } })
        return res.status(201).json({
            message: "Product created successfully  ",
            success: true,
            data: pEntry
        })
    }
    catch (error) {
        console.log("Getting an error in create product controller");
        return res.status(500).json({
            message: "Internal server error in create product controller ",
            success: false
        })
    }
}
exports.getAllProduct = async (req, res) => {
    try {
        const pEntry = await Product.find({});
        return res.status(200).json({
            message: " All Product Feteched successfully",
            success: true,
            data: pEntry
        })
    }
    catch (error) {
        console.log("Getting an error in All Product controller");
        return res.status(500).json({
            message: "Internal server error in All Product controller ",
            success: false
        })
    }
}
exports.getOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const pEntry = await Product.findById({ _id: id });
        return res.status(200).json({
            message: "getOneProduct Feteched successfully",
            success: true,
            data: pEntry
        })
    }
    catch (error) {
        console.log("Getting an error in getOneProduct controller");
        return res.status(500).json({
            message: "Internal server error in getOneProduct controller ",
            success: false
        })
    }
}
exports.UpdateOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { productName, productCreateDate, productInfo } = req.body;
        const pEntry = await Product.findByIdAndUpdate({ _id: id }, { productName, productCreateDate, productInfo });
        return res.status(200).json({
            message: "UpdateOneProduct Feteched successfully",
            success: true,
            data: pEntry
        })
    }
    catch (error) {
        console.log("Getting an error in UpdateOneProduct controller");
        return res.status(500).json({
            message: "Internal server error in UpdateOneProduct controller ",
            success: false
        })
    }
}

exports.DeleteOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body

        //step-1 delete product id from User model
        await User.findByIdAndUpdate({ _id: userId }, { $pull: { myProductDetails: id } })
        //step-2 ab product ko delete kar do
        await Product.findByIdAndDelete({ _id: id });
        return res.status(200).json({
            message: "Deleteed product successfully",
            success: true,
        })
    }
    catch (error) {
        console.log("Getting an error in Delete Product controller");
        return res.status(500).json({
            message: "Internal server error in Delete Product controller ",
            success: false
        })
    }
}