let http = require("http")
let fs = require('fs')
let server = http.createServer((req,res)=>{
    if(req.url==="/login"){
        console.log("in login")
        switch(req.method){
            case "GET":
                fs.createReadStream("login.html").pipe(res)
                break;
            case "POST" :
                console.log("req"+req+"res:"+res)
                break
            default:
                console.log("othert request")
        }
    }else{
        res.writeHead(302,{
            "Location":"/login"
        });
        res.end();
    }
})
server.listen(3000)
console.log("port 3000 is running")