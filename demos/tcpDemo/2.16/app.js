let net = require('net')
let server = net.createServer((c)=>{
    console.log('client connected')
    c.on('end',()=>{
        console.log('client connected')
    })
    c.write("hello\r\n")
    c.pipe(c)
})
server.on('error',(err)=>{
    throw err
})
server.listen(8124,()=>{
    console.log('server bound')
})