const fs = require("fs")
const path = require("path")

const productsPath = path.join(__dirname, "../data/productsDataBase.json")
const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))

const productController = {
    allProducts: (req,res) =>{
        res.render("products", {products})
    }
}

module.exports = productController