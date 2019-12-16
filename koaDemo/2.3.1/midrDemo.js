const koa = require('koa')
const app = new koa()
const logger = async (ctx,next)=>{
    console.log(ctx.methond,ctx.host+ctx.url)
    await next()
}
app.use(logger)
app.use(async(ctx,next)=>{
    console.log('hello')
})
app.listen(3000)