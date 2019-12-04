async function readFile() {
    let result = await readFile_promise("foo.txt")
    console.log(result)
}

readFile()
readFile_promise("./foo.txt").then(function (data) {
    console.log(data)
})