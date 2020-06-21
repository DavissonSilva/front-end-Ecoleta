const expless = require("express")
const server = expless()

server.use(expless.static("public"))

// pagina inicial

server.get("/", function(req,res){
    res.sendFile(__dirname +"/views/index.html")
})
server.get("/create-point", function(req,res){
    res.sendFile(__dirname+"/views/create-point.html")
})
// liga o servidor 
server.listen("3000")
