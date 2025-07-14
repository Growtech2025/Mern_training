const express = require("express");
const router = express.Router();
const { createProduct, getAllProduct, getOneProduct, UpdateOneProduct, DeleteOneProduct } = require("../controllers/ProductController.js");
router.post("/create-product", createProduct);
router.get("/all-product", getAllProduct);
router.get("/get-product/:id", getOneProduct);
router.put("/update-product/:id", UpdateOneProduct);
router.delete("/delete-product/:id", DeleteOneProduct)


module.exports = router;