//appending the file
var fs=require('fs')
fs.appendFile('sample.txt','welcome1',function(err){
    if(err)throw err;
    console.log('Saved!!');
});