const fs = require("fs")
const path = require("path")

const productsPath = path.join(__dirname, "../data/productsDataBase.json")
const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))

const productController = {
    allProducts: (req,res) =>{
        res.render("products", {products})
    },

    create: (req,res) =>{
        res.render("product-create-form")
    }
}

module.exports = productController