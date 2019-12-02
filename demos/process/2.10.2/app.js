let spawn = require('child_process').spawn
let ls = spawn('ls',['-lh','/usr'])
ls.stdout.on('data',(data)=>{
console.log("stdout",data.toString())
})

ls.stdout.on('data',(data)=>{
    console.log("stderr",data.toString())
})

ls.stderr.on('data',(data)=>{
    console.log('stderr',data.toString())
})

ls.on('close',(code)=>{
    console.log("子进程代码code",code)
})