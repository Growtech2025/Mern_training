const express = require("express");
const router = express.Router();
const Signup = require("../controllers/Signup.js")
const Login = require("../controllers/Login.js")
const VerifyAccount = require("../controllers/VerifyAccount.js")
const ResendOtp = require("../controllers/ResendOtp.js");
const ResetPassword = require("../controllers/ResetPassword.js");
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/verify-account", VerifyAccount);
router.post("/resend-otp", ResendOtp);
router.post("/reset-password", ResetPassword)
module.exports = router;
