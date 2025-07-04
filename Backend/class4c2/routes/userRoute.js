const express = require("express");
const router = express.Router();
const CreateUser=require("../controllers/CreateUser.js")
const LoginController=require("../controllers/LoginController.js")

router.post("/signup", CreateUser);
router.get("/login",LoginController);
// router.get("/portal",AllPlacement);
module.exports = router;
