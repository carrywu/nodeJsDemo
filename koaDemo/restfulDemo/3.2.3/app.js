const koa = require('koa')
const Route = require('koa-router')
const app = new koa();

const router = new Route()

router
    .get('/',async(ctx,next)=>{
        ctx.body="hello world"
    })
    .post('/users',async(ctx,next)=>{
       ctx.body="/users"
    })
    app.use(router.routes())
    app.listen(3000)