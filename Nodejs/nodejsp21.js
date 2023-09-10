//Deleting the file
var f1=require('fs')
f1.unlink('mynewfile1.txt',function(err){
    if(err)throw err;
    console.log('FileDeleted..')
});