const expless = require("express")
const server = expless()

server.use(expless.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express:server,
    noCache:true
})




// pagina inicial

server.get("/", function(req,res){
 return res.render("index.html",{title:"Um titulo"})
})
server.get("/create-point", function(req,res){
 return   res.render("create-point.html")
})
server.get("/search", function(req,res){
    return   res.render("search-results.html")
   })
// liga o servidor 
server.listen("3000")
