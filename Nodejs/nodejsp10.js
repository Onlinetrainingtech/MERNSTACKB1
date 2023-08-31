try
{
    var i=0
   setTimeout(function(){
    console.log("Finished..");
    i++;
   },10000);
}
catch(err)
{
    console.log("An error occurred",err)
}