const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController")

router.get("/products", productController.allProducts)

router.get("/products/create/", productController.create)
router.post("/products", productController.store)

router.get("/products/detail/:id", productController.detail)

router.get("/products/edit/:id" ,productController.edit)
router.put("/products/", productController.productEdited)

module.exports = router