const express = require("express");
const router = express.Router();
const cSubjectController = require("../controllers/cSubjectController.js");
router.post("/create-subject", cSubjectController);
module.exports = router;