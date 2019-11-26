let http = require("http")
http.get("http://blockchain.info/ticker",(res)=>{
    console.log(res.statusCode)
    let statusCode = res.statusCode;
    if(statusCode==200){
        let result = ""
        res.on("data",(data)=>{
            result += data
        })
        res.on("end",()=>{
            console.log(result.toString())
        })
        res.on("error",(e)=>{
            console.log(e.message)
        })
    }
})