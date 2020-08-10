//Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// configurar nunjucks (tamplate engine)
const nunjucks =  require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//Inicio e configuração do servidor
server
//receber dados do req.body do servidor
.use(express.urlencoded({ extended: true}))
// configurar arquios estáticos (css, imagens, scripts)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding )
.get("/study", pageStudy) 
.get("/give-class", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start do servidor
.listen(5500)