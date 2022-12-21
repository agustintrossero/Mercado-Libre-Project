const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController")

router.get("/products", productController.allProducts)

router.get("/products/create/", productController.create)
//router.put("/products", productController.store)

router.get("/products/detail/:id", productController.detail)

module.exports = router