const express = require("express");
const router = express.Router();
const CreatePlacement = require("../controllers/CreatePlacement.js");
const GetPlacement = require("../controllers/GetPlacement.js")
const AllPlacement = require("../controllers/AllPlacement.js");
const updatePlacement = require("../controllers/updatePlacement.js");
const DeletePlacement = require("../controllers/DeletePlacement.js");
router.post("/create-placement", CreatePlacement);
router.get("/get-placement/:id",GetPlacement);
router.get("/AllPlacement",AllPlacement);
router.put("/updatePlacement/:id",updatePlacement);
router.delete("/deletePlacement/:id",DeletePlacement);

module.exports = router;
