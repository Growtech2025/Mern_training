const express = require("express");
const router = express.Router();
const { Signup,Login,VerifyAccount,ResetPassword,ResendOtp,DeleteAcount,Logout } = require("../controllers/UserController.js");
router.post("/signup", Signup);
router.post("/login",Login);
router.post("/very-account",VerifyAccount);
router.put("/resend-otp",ResendOtp)
router.put("/reset-password",ResetPassword)
router.delete("/delete-Account",DeleteAcount)
router.get("/logout",Logout)
module.exports = router