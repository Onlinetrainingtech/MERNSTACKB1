var fs=require('fs')
var r1=fs.createReadStream('sample.txt')

var r2=fs.createWriteStream('output.txt')

r1.pipe(r2)
console.log("Program ends..")