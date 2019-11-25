let http = require("http")
 
let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('fuck 🚺');
})
server.listen(3000)