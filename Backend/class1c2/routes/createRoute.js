const express=require("express");
const router=express.Router();
const {createController}=require("../controllers/createController.js")
console.log("me yha se hokar controller me gya hu")
router.get("/get-item",createController);
router.post("/create-item",createController);
  