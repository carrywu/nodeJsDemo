
let EventEmitter = require("events")
class _Producer extends EventEmitter {
    constructor() {
        super()
        this.status = "ready"
    }
}
var _Producer = new EventEmitter();
_Producer.on("begin", function () {
    console.log(this.status)
})
// _Producer.on("begin", () => {
//     let self = this
//     console.log(this)
//     console.log(this.status)
//     console.log(self.status)
// })