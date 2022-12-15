const fs = require("fs")
const path = require("path")

const productsPath = path.join(__dirname, "../data/productsDataBase.json")
const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))

const productController = {
    allProducts: (req,res) =>{
        res.render("products", {products})
    },

	detail: (req, res) => {
		
		let idProducto = req.params.id;
		res.render('product-detail',{"productoSeleccionado": products[idProducto-1]});
	},

    create: (req,res) =>{
        res.render("product-create-form")
    }
}

module.exports = productController