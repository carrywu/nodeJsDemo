let stream = require("stream")
let http = require("http")
let fs = require("fs")
let server = http.createServer((req,res)=>{
    if(req.url=="/"){
        let fileList = fs.readFileSync("./")
        res.writeHead(200,{"Cotent-type":"text/pain"})
        res.end(fileList.toString())
    }
    else{
        let path = "."+req.url
        let readSteam = fs.createReadStream(path)
        readSteam.setEncoding("UTF-8")
        readSteam.pipe(res)
        console.log("else")
    }
})
let port = 3000
server.listen(port)
console.log("listening on 3000")
process.on("uncaughtException",()=>{
console.log("got erorr")
})