const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController")

router.get("/products", productController.allProducts)
router.get("/products/create/", productController.create)

module.exports = router