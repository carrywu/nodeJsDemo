let eventEmitter = require("events")
let  myEmitter = new eventEmitter();
myEmitter.on("begin",()=>{
    console.log("begin")
})
myEmitter.emit("begin")