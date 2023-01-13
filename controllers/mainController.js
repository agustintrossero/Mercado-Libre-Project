const fs = require("fs")
const path = require("path")

const productsPath = path.join(__dirname, "../data/productsDataBase.json")
const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))

const mainController = {
    home: (req,res) =>{
        res.render("home")
    },

    search: (req,res) =>{

       // res.render("results", {"searchResult": products})
       
       let busqueda = req.query.searchBar.toLowerCase()
       // console.log(busqueda)
        for( i=0; i<products.length; i++){
            if(products[i].name.toLowerCase().includes(busqueda)){
                res.render("results", {"searchResult": products[i]})
            }
        }
        console.log(busqueda)
        
    }
   
}

module.exports = mainController