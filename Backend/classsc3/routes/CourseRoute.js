//step- 1 import express
const express = require("express");
const { createCourse } = require("../controllers/CreateCourseController.js")
//routes define karne hai but uske leaye hame router chaheaye 
const router = express.Router();

//define your paths 
router.post("/create-course", createCourse);


//export router 
module.exports = router;