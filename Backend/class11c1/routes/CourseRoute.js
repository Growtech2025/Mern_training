const express = require("express");
const router = express.Router();
const TeacherMiddleware = require("../middlewares/TeacherMiddleWare.js");
const VerifyUser = require("../middlewares/VerifyUser.js")
const { getAllCourses, myCreatedCourses } = require("../controllers/CourseController.js");
router.post("/all-courses", getAllCourses);
const { createCourse, updateSingleCourse, deleteSingleCourse, getSingleCourse } = require("../controllers/CourseController.js");
router.post("/create-course", VerifyUser, TeacherMiddleware, createCourse);
router.put("/update-course/:id", VerifyUser, TeacherMiddleware, updateSingleCourse);
router.delete("/delete-course/:id", VerifyUser, TeacherMiddleware, deleteSingleCourse);
router.get("/my-courses", VerifyUser, TeacherMiddleware,myCreatedCourses);
router.get("/single-course/:id", VerifyUser, getSingleCourse);
module.exports = router;