const koa = require('koa')
const app = new koa()
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())
app.use(async (ctx)=>{
    console.log('ctx.url',ctx.url,'ctx.method',ctx.url==='/',ctx.method==="GET",ctx.url==='/'&& ctx.method==="GET")
    if(ctx.url==='/'&& ctx.method=="GET"){
          
        ctx.type='html'
        let html = `
        <h1>登陆<h1/>
        <form action="/" method="POST">
        <p>用户名</p>
        <input type="text" name="username">
        <p>密码</p>
        <input type="password" name="password" id="">
        <button type="submit">submit</button>
    </form>
        `
        ctx.body=html
    }else if(ctx.url==='/'&&ctx.method=='POST'){
            let postData = ctx.request.body
            ctx.body = postData
    }
})
app.listen(3001)