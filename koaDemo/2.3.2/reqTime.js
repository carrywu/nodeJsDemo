const koa= require('koa')
const app = new koa()
app.use(async (ctx,next)=>{
    let stime = new Date().getTime()
    await next();
    let etime = new Date().getTime()
    ctx.response.type = 'text/html'
    
    ctx.response.body="1111"
    console.log(`请求地址：${ctx.path},
    相应时间：${etime-stime}ms`)
    
})
app.use(async(ctx,next)=>{
    console.log('中间件 do someting')
    await next()
    console.log('中间件执行 over')
})
app.listen(3000,()=>{
    console.log('server is runing @ http://localhost:3000')
})