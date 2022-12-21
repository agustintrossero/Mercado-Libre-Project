const fs = require("fs")
const path = require("path")

const productsPath = path.join(__dirname, "../data/productsDataBase.json")
const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))

const productController = {
    allProducts: (req,res) =>{
        res.render("products", {products})
    },

	detail: (req, res) => {
		
		let idProducto = req.params.id
		res.render('product-detail', {"productSelected": products[idProducto-1]});
        console.log(idProducto)
	},

    create: (req,res) =>{
        res.render("product-create-form")
    },

    store: (req,res) =>{
        let info = req.body.name
        console.log(info)
        res.redirect("/products")
    }
}

module.exports = productController