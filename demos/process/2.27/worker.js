let begin = process.argv[2]
console.log("i am worker"+begin)
process.on("message",(msg)=>{
    console.log("from parent",msg)
    process.exit();
})
process.send({hello:"parent"})