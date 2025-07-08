const express = require("express");
const router = express.Router();
const Signup = require("../controllers/Signup.js");
const Login = require("../controllers/Login.js");
const EnrollCourses = require("../controllers/EnrollCourses.js");
const CreateCourses = require("../controllers/CreateCourses.js");
const VerifyUser = require("../middlewares/VerifyUser.js");
const StudentMiddleware = require("../middlewares/StudentMiddleware.js");
const TeacherMiddleware = require("../middlewares/TeacherMiddleware.js");
router.post("/signup", Signup);
router.post("/login", Login);
router.get("/enroll-courses", VerifyUser,StudentMiddleware,EnrollCourses)
router.get("/created-courses", VerifyUser,TeacherMiddleware, CreateCourses)
module.exports = router;