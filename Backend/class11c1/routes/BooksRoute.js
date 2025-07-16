const express = require("express");
const router = express.Router();
const TeacherMiddleware = require("../middlewares/TeacherMiddleWare.js");
const VerifyUser = require("../middlewares/VerifyUser.js")
const { createBookControler, getAllBooks,getSingleBooks,updateSingleBooks,deleteSingleBooks} = require("../controllers/BooksControler.js");
router.get("/all-books", getAllBooks);
router.post("/create-books", VerifyUser, TeacherMiddleware, createBookControler);
router.put("/update-books/:id", VerifyUser, TeacherMiddleware, updateSingleBooks);
router.delete("/delete-books/:id", VerifyUser, TeacherMiddleware, deleteSingleBooks);
// router.get("/my-books", VerifyUser, TeacherMiddleware,myCreatedCourses);
router.get("/single-books/:id", VerifyUser, getSingleBooks);
module.exports = router;