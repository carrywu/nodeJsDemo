let express = require('express')
let superagent = require('superagent')
let cheerio = require('cheerio')

let app = express();
app.get('/',(req,res,next)=>{
    superagent.get('https://cnodejs.org/')
    .end((err,sres)=>{
        if(err){
            return next(err)
        }
        let $ = cheerio.load(sres.text)
        let items = []
        let authorArr =[]
          
        $('#topic_list .user_avatar img').each((index,ele)=>{
            let $ele=$(ele)
            authorArr.push({
                author:$ele.attr('title')
            })
           
           
        })
        $('#topic_list .topic_title').each((idex,element)=>{
            let $element = $(element);
      
            items.push({
                title:$element.attr('title'),
                href:$element.attr('href'),
                index:idex,
                author:authorArr[idex].author
            })
            
          
            console.log('idex',idex)

        })
        console.log('items',items)
        res.send(items)
    })

})

app.listen(3000,()=>{
    console.log('3000 is running')
})