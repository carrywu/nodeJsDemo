let http = require("http")
let fs = require('fs')
let formidable = require("formidable")
let server = http.createServer((req,res)=>{
    if(req.url==="/upload"){
        console.log("in upload")
        switch(req.method){
            case "GET":
                fs.createReadStream("upload.html").pipe(res)
                break;
            case "POST" :
              dealUpload(req,res);
                break
            default:
                console.log("othert request")
        }
    }else{
        res.writeHead(302,{
            "Location":"/upload"
        });
        res.end();
    }
    function dealUpload(req,res){
        let form = new formidable.IncomingForm();
        form.keepExtensions = true;
        form.uploadDir=__dirname;
        form.parse(req,(err,fields,files)=>{
            if(err) {throw err}
            console.log(fields)
            console.log(files)
            res.writeHead(200,{"content-type":"text/plain"})
            res.end("upload finished")
        })
    }
})
server.listen(3000)
console.log("port 3000 is running")