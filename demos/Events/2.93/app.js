let util = require("util")
let event = require("events")
function Player (){
    event.call(this)
}
util.inherits(Player,event)

let player = new Player()

player.on("pause",()=>{
    console.log("paused")
})
player.on('play',()=>{
    console.log("playing")
})
player.emit("play")