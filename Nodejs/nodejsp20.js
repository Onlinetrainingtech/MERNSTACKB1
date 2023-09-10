//Write a file
var fs=require('fs')
fs.writeFile('mynewfile1.txt','welcome',function(err){
    if(err)throw err;
    console.log('Saved!!')
});