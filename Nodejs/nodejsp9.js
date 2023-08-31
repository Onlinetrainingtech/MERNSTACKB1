var i=10
setTimeout(function(){
    console.log("Finished..");
    i++
},10000);
if(i==1)
{
    console.log("Waiting")
}
else
{
    console.log("I value did not change..");
}