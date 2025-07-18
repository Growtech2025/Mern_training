const express = require("express");
const router = express.Router();
const {getAllCourses,EnrollCourse}=require("../controllers/CourseController.js")
const {EnrollBooks}=require("../controllers/BooksControler.js")
const VerifyUser = require("../middlewares/VerifyUser.js");
const StudentMiddleware = require("../middlewares/StudentMiddleware.js");

router.get("/enroll-course/:courseId", VerifyUser, StudentMiddleware, EnrollCourse);
router.get("/enroll-books/:id", VerifyUser,StudentMiddleware, EnrollBooks);

router.get("/all-courses", getAllCourses);

module.exports = router