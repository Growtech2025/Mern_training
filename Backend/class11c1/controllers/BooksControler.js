const Books = require("../models/Books.js")
const User=require("../models/User.js")
exports.createBookControler = async (req, res) => {
    try {


        const { bookName, bookDiscription,bookPrice } = req.body

        if (bookName === "" || bookDiscription === "" || bookPrice == "") {
            return res.status(400).json({
                message: "Data is required compalsury",
                success: false
            })
        }
        const id=req.user.id;
        const userData= await User.findById({_id:id})
        console.log("ye userdata he bhaiya ", userData)

        const BooksData = await Books.create({ bookName, bookDiscription, bookAuthor:userData.name, bookPrice })
        await User.findByIdAndUpdate({ _id: id }, { $push: { myCreatedBooks: BooksData._id } })
        
        return res.status(201).json({
            message: "Books created succesfully",
            success: true,
            data: BooksData
        })

    }
    catch (e) {
        console.log("error in create books controller", e)
        return res.status(500).json({
            message: "error in create books controller",
            success: false
        })
    }



}
exports.getAllBooks = async (req, res) => {
    try {
        const allBooks = await Books.find({});
        return res.status(200).json({
            message: " All bookss Feteched successfully",
            success: true,
            data: allBooks
        })
    }
    catch (error) {
        console.log("Getting an error in All Books controller");
        return res.status(500).json({
            message: "Internal server error in All Books controller ",
            success: false
        })
    }


}
exports.getSingleBooks = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(200).json({
                message: "books id not found ",
                success: false,
            })
        }
        const singleBooksDetails = await Books.findById({ _id: id });
        if (!singleBooksDetails) {
            return res.status(400).json({
                message: `books id ${id} is not exist sorry no books found`,
                success: false,

            })
        }
        return res.status(200).json({
            message: "single books Feteched successfully",
            success: true,
            data: singleBooksDetails
        })
    }
    catch (error) {
        console.log("Getting an error in single Books controller");
        return res.status(500).json({
            message: "Internal server error in single books controller ",
            success: false
        })
    }


}
exports.updateSingleBooks = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("books id", id)
        if (!id) {
            return res.status(400).json({
                message: "books id not found ",
                success: false,
            })
        }

        const { bookName, bookDiscription, bookPrice } = req.body;

        if (bookName === "" || bookDiscription === "" || bookPrice === "") {
            return res.status(400).json({
                message: "books name and books discription & price is required  ",
                success: false
            })
        }
        await Books.findByIdAndUpdate({ _id: id }, {  bookName, bookDiscription, bookPrice });
        return res.status(200).json({
            message: "update books successfully",
            success: true,
        })

    }
    catch (error) {
        console.log("Getting an error in update Books controller");
        return res.status(500).json({
            message: "Internal server error in update books controller ",
            success: false
        })
    }


}
exports.deleteSingleBooks = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                message: "books id not found ",
                success: false,
            })
        }
        const loginuserId=req.user.id;
        // const loginuserdata= await User.findById({_id:loginuserId})
        await User.findByIdAndUpdate({_id:loginuserId},{$pull:{myCreatedBooks:id} })
        
        await User.findByIdAndUpdate({_id:loginuserId},{$pull:{myEnrollbooks:id} })

       const booksData= await Books.findByIdAndDelete({_id:id})
       if(!booksData){

        return res.status(401).json({
            message:"book data not found",
            success:false
        })
       }
        return res.status(200).json({
            message: "delete books successfully",
            success: true,
        })

    }
    catch (error) {
        console.log("Getting an error in delete Books controller",error);
        return res.status(500).json({
            message: "Internal server error in delete books controller ",
            success: false
        })
    }


}
exports.EnrollBooks = async (req, res) => {
    try {
        const { id } = req.params
        console.log("books id", id)

        if (!id) {
            return res.status(400).json({
                message: "books id not found ",
                success: false,
            })
        }

        //test ase jo books enroll ho gya ab enroll nhi hoga test case 
        const idd = req.user.id;
        const presentuse = await User.findById({ _id: idd });
        const myEnrollbooks = presentuse.myEnrollbooks;
        console.log("enroll idd", myEnrollbooks)

        if (id == myEnrollbooks) {
            return res.status(200).json({
                message: "You have already enroll this books",
                success: false
            })
        }

        // check books by id 
        const isbooksPresent = await User.findById({ _id: idd })
        console.log("ye he data", isbooksPresent)
        if (!isbooksPresent) {
            return res.status(404).json({
                message: `this books id ${id} is invalid`,
                success: false,
            })
        }

        const loginuserId = req.user.id;
        await User.findByIdAndUpdate({ _id: loginuserId }, { $push: { myEnrollbooks: isbooksPresent._id } })

        //update the user schema

        return res.status(200).json({
            message: "User Enrolled books successfully",
            success: true,
        })
    }
    catch (error) {
        console.log("Getting an error in enroll books controller", error);
        return res.status(500).json({
            message: "Internal server error in enroll books controller ",
            success: false
        })
    }
}