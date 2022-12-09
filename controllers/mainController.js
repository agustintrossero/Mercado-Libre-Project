const mainController = {
    home: (req,res) =>{
        res.render("home")
    },
    hola: (req,res)=> {
        res.send("prueba piola")
    }
}

module.exports = mainController