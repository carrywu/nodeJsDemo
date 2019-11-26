let http = require('http')
let url = require('url')

http.createServer((req,res)=>{
    let url = req.url.substring(1,req.url.length)
    let proxyRequest = http.request(url,(pres)=>{
        res.writeHead(pres.statusCode,(data)=>{
            res.write(data)
        })
        pres.on('end',()=>{
            res.end()
        })
    })
    req.on('data',(data)=>{
        proxyRequest.write(data)
    })
    req.on('end',()=>{
        proxyRequest.end()
    })
}).listen(8080)