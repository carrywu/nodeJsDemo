let readline = require("readline")
let fs = require("fs")
let rl = readline.createInterface({
    input:fs.createReadStream("./text.txt")
})
rl.on("line",(data)=>{
    console.log(data)
})
rl.on("close",()=>{
    console.log("cloesd")
})