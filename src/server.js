const express = require('express')
const server = express()

server.use(express.static("public"))

.get("/", (req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})

.get("/study", (req, res) => {
    return res.sendFile(__dirname + "/views/study.html")
})

.get("/give-class", (req, res) => {
    return res.sendFile(__dirname + "/views/give-class.html")
})

.listen(5500)