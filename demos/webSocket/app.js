let ws = require('ws')
let WebSocketServer = ws.Server
let wss = new WebSocketServer({port:3004})
wss.on('connection',(ws)=>{
    ws.on('message',(message)=>{
        console.log("received:%",message)
    })
    ws.send("👴收到消息了")
})