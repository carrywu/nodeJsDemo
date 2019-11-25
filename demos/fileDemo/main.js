let fs = require("fs")

// fs.readFile('foo.txt', (err, data) => {
//     if (err) throw err
//     console.log('data txt', data)
// })

// let dataSync = fs.readFileSync('foo.txt', { encoding: "utf-8" })
// console.log('dataSync', dataSync)

// fs.writeFile("foo2.txt", "hello node", { flag: "a", encoding: "utf-8" },
//     function (err) {
//         if (err) {
//             console.log('err', err)
//             return
//         }
//         console.log("success")
//     }

// )

// fs.stat('foo.txt', (err, res) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(res)
// })

// fs.open('foo.txt', 'a', (err, fd) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(fd)
//     fs.fstat(fd, (err, res) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         console.log('fstat res', res)
//     })
// })

function getAllFileFromPath(path){
    console.log('getAllFileFromPath',path)
    fs.readdir(path,(err,res)=>{
        console.log('path',res)
        for(let subPath of res){
            let statObj = fs.statSync(path+'/'+subPath)
            if(statObj.isDirectory()){
                console.log("dir:",subPath)
                getAllFileFromPath(path+"/"+subPath)
            }else{
                console.log("File:",subPath)
            }
        }
    })
}

getAllFileFromPath(__dirname)