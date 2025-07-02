const express = require("express");
const router = express.Router();
const createCourse = require("../controllers/createCourse.js");
const getCourse = require("../controllers/getCourse.js")
const getSingleCourse = require("../controllers/getSingleCourse.js")
const getCourseByParameter=require("../controllers/getCourseByParameter.js")
const updateCourse=require("../controllers/updateCourse.js")
const deleteController=require("../controllers/deleteController.js")
router.post("/create-course", createCourse);
router.get("/all-courses", getCourse);
router.get("/single-course", getSingleCourse);
router.get("/single-course/:id", getCourseByParameter);
router.put("/update-single-course/:id", updateCourse);
router.delete("/delete-single-course/:id", deleteController);
module.exports = router;