let express = require('express');
let utility = require('utility')

let app = express()

app.get('/',(req,res)=>{
    const q = req.query.q;
    console.log('req.query',req.query)
    const md5val = utility.md5(q)
    const sha1Val = utility.sha1(q)
    res.send('madval:'+md5val+'  '+'sha1val'+sha1Val)
})
app.listen(3000,(req,res)=>{
    console.log('port 3000 is runging')
})