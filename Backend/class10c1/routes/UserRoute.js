const express = require("express");
const router = express.Router();
const { createUser,getAllUser,getOneUser,UpdateOneUser,DeleteOneUser } = require("../controllers/UserController.js");
router.post("/create-user", createUser);
router.get("/all-user",getAllUser);
router.get("/getuser/:id",getOneUser);
router.put("/update-user/:id",UpdateOneUser)
router.delete("/delete-user/:id",DeleteOneUser)

module.exports = router