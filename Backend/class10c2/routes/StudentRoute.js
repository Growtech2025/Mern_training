const express = require("express");
const router = express.Router();
// const { createUser,getAllUser } = require("../controllers/UserController.js");
// router.post("/mycourses", createUser);
router.get("/enroll-course",getAllUser);
// router.get("/remove-enroll-course",getAllUser);

module.exports = router