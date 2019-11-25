let http = require("http")
let server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/palin"})
    res.end("hello node")
})
server.on("connection",(req,res)=>{
    console.log("connection")
})
server.on("request",(req,res)=>{
    console.log("request")
})
server.listen(3000)