let fs = require('fs')
function readFile_promise(path) {
    return new Promise(function (resolve,reject) {
        fs.readFile(path,'utf-8',(err,data)=>{
            if(data){
                console.log(data)
                resolve(data)
            }else{
                reject(data)
            }
        })
        
    })
}
readFile_promise('./test.txt')