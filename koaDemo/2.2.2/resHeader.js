const koa =require('koa')
const app = new koa()
app.use(async(ctx)=>{
    ctx.response.status = 200
    let req = ctx.request
    let res = ctx.response
    console.log(res)
    if(req.accepts('json')){
        res.type = 'json'
        res.body={
            data:"hello world"
        }
    }
    else if(req.accepts('html')){
        res.type='html'
        res.body ='<p>hello world</p>'

    }
    else{
        res.type='text'
        res.body='hello world'
    }
})
app.listen(3000);