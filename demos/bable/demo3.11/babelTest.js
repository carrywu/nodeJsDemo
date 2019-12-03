let babel = require('@babel/core')
let fs = require("fs")
babel.transformFile("./ES6/async.js",function(err,res){
    console.log(res.code,err)
})