const express = require("express");
const router = express.Router();
const Login = require("../controllers/Login.js");
const Signup = require("../controllers/Signup.js");
const AllStudent = require("../controllers/AllStudent.js");
const VerifyUser = require("../middlewares/VerifyUser.js");
const StudentMiddleware = require("../middlewares/StudentMiddleware.js");
router.post("/login", Login)
router.post("/signup", Signup)
router.get("/allStudent",VerifyUser,StudentMiddleware, AllStudent)
module.exports = router;