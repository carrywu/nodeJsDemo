import "babel-polyfill"
import { promises } from "fs"
import { resolve } from "dns"
import { reject } from "../demo3.11/ES6/async"
function timeout(ms) {
    return new promise((resolve,reject)=>{
        setTimeout(resolve,ms,'done')
    })
}
timeout(1000).then((value)=>{
    console.log(value)
})