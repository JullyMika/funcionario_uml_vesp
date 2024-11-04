//CARREGAR MÓDULOS
const express = require("express")
const handlebars = require("express-handlebars")

const app = express()
const porta = 5500

//EXIBINDO INFORMAÇÕES NA TELA
app.get("/",(req, res)=>{
    res.send("<h1>Tudo Funcionando</h1>")
})

//ESECUTANDO SERVIDOR 
app.listen(porta, ()=>{
    console.log("Servidor executando na porta ", porta)
})