const express = require('express')
const path = require('path')
const app = express()
const methodOverride = require("method-override")



app.listen(3000, () => console.log("Sitio funcionando en puerto 3000"))
app.use(express.static('public'));

app.set("view engine", "ejs")

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(methodOverride("_method"))

const mainRouter = require("./routes/mainRouter")
const userRouter = require("./routes/userRouter")
const productRouter = require("./routes/productRouter")

app.use(mainRouter)
app.use(userRouter)
app.use(productRouter)


/*
app.get('/register', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/login', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})
*/