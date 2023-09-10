var inputfile=require('fs')
var data=inputfile.readFileSync('demo.html','utf-8')
console.log(data)
console.log("Done")