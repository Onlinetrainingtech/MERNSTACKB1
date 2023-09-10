var e1=require('events')
var eventE=new e1.EventEmitter()
//create a Event Handler
var myEventHandler=function(){
    console.log('I hear a Function')
}
//Assign the event handler to an event
eventE.on('s1',myEventHandler);
//Fire the s1 event

eventE.emit('s1');