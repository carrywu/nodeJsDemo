const koa = require('koa')
const app = new koa();
app.use(async(ctx)=>{
    let postdata =''
    ctx.req.on('data',(data)=>{
        console.log('data',data)
        postdata += data
    })
    ctx.req.on('end',()=>{
        console.log(postdata)
    })
})
app.listen(3000)