const path = require("path")
const fs = require("fs")
const express = require('express')

const app = express()


const productsPath = path.join(__dirname, "products.json")

const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))



const PORT = 8000
const HOST = 'localhost'

app.get("/", (req, res) =>{
    res.status(200).json("hello")
})
app.get("/products",(req,res)=>{
    res.status(200).json(products)
})
app.listen(PORT, HOST, () => {
    console.log(`Server started on http://${HOST}:${PORT}`)
})