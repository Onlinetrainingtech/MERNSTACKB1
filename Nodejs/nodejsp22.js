//File Rename
var f1=require('fs')
f1.rename('sample.txt','myfile1.txt',function(err){
    if(err)throw err;
    console.log('FileRenamed!!')
});