let eventproxy = require('eventproxy')
let superagent = require('superagent')
let cheerio = require('cheerio')
let url = require('url')

let cnodeUrl = 'https://cnodejs.org/'

superagent.get(cnodeUrl)
    .end((err, res) => {
        if (err) {
            return console.error(err)
        }
        let topicUrls = []
        let $ = cheerio.load(res.text)
        $('#topic_list .topic_title').each((idx, element) => {
            let $element = $(element)
            var href = url.resolve(cnodeUrl, $element.attr('href'))
            topicUrls.push(href)
        })
        topicUrls.splice(4, topicUrls.length - 5)
        console.log('topicUrls', topicUrls)
        let ep = new eventproxy()
        ep.after('topic_html', topicUrls.length, (topics) => {
            topics = topics.map((topicPair) => {
                let topicUrl = topicPair[0]
                let topicHtml = topicPair[1]
                let $ = cheerio.load(topicHtml)
                let herf;
                let score1;
                if($('.reply_author').attr('href')){
                herf = url.resolve(cnodeUrl,$('.reply_author').attr('href'))
                
                superagent.get(herf)
                .end((err,res)=>{
                    if(err){
                        return console.error(err)
                    }
                    let $score = cheerio.load(res.text)
                    score1= $score('.floor .big').text()
                    let obj = {
                        title: $('.topic_full_title').text().trim(),
                        href: topicUrl,
                        comment1: $('.reply_content').eq(0).text().trim(),
                        author1:$('.reply_author').eq(0).text().trim(),
                        score1:score1
                    }
                    console.log('$',obj)
                })
            
            }
           
               
            })
            console.log('final:')
            console.log(topics)
        })
        topicUrls.forEach((topicUrl)=>{
            superagent.get(topicUrl)
            .end((err,res)=>{
                console.log('fetch'+topicUrl+'successful')
                ep.emit('topic_html',[topicUrl,res.text])
            })
        })


    })





