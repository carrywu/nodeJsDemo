let fs = require('fs')
let async = require('async')
function read_foo(callback) {
    fs.readFile("foo.txt",'utf-8',callback)
}
function read_bar(callback) {
    fs.readFile("bar.txt",'utf-8',callback)
}
function read_baz(callback) {
    fs.readFile("baz.txt",'utf-8',callback)
}
async.series([read_foo,read_bar,read_baz],(err,res)=>{
    console.log(res)
})
