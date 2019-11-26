let stream = require("stream")
let fs = require("fs")
let readStream = fs.createReadStream("./test.txt","utf-8")
readStream.on("data",(data)=>{
    console.log(data)
})
readStream.on("close",()=>{
    console.log("close")
})
readStream.on("error",()=>{
    console.log("error")
})