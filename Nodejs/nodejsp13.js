var fs=require('fs')
var data=''
//create a readable stream
var rs=fs.createReadStream('sample.txt');
// rs.setEncoding('utf-8')
rs.on('data',function(chunk){
    data+=chunk;
    console.log("****",data)
});
rs.on('end',function(){
    console.log(data);
});
rs.on('error',function(){
  console.log(err.stack);
});
console.log('End Program')

var fs=require('fs')