var e1=require('express')
var app=e1();
app.get("/",function(req,res){
    res.send("Welcome to the Application")
});
app.listen(3000);
console.log("ServerRuning...")