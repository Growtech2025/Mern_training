const express = require("express");
const router = express.Router();
const { getAllCourses } = require("../controllers/CourseController.js");
router.post("/all-courses", getAllCourses);
module.exports = router