let http = require("http")
let fs  = require("fs")

let server = http.createServer((req,res)=>{
    if(req.url=="/"){
        let fileList = fs.readFileSync("./")
        res.writeHead(200,{"Content-type":"text/palin"})
        res.end(fileList.toString())
    }else{
        let path = req.url
        fs.readFile("./"+path,(err,data)=>{
            if(err){
                res.end("xxxxxERRXXXXX")
                throw err
            }
            res.writeHead(200,{"Content-type":"text/plain"})
            res.end(data)
        })
    }
})
server.listen(3005)
console.log("listening 3005")
process.on("uncaughtException",function(){
    console.log("got error")
})