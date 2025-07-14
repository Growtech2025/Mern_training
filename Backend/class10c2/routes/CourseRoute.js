const express = require("express");
const router = express.Router();
const TeacherMiddleware = require("../middlewares/TeacherMiddleWare.js");
const VerifyUser = require("../middlewares/VerifyUser.js")
const { createCourse, updateSingleCourse, deleteSingleCourse, getSingleCourse } = require("../controllers/CourseController.js");
router.post("/create-course", VerifyUser, TeacherMiddleware, createCourse);
router.put("/update-course/:id", VerifyUser, TeacherMiddleware, updateSingleCourse);
router.delete("/delete-course/:id", VerifyUser, TeacherMiddleware, deleteSingleCourse);
router.get("/single-course/:id", VerifyUser, getSingleCourse);


module.exports = router;