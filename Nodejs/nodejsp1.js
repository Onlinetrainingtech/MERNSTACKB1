var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("welcome");
}).listen(8080)
console.log("Server is Running...")