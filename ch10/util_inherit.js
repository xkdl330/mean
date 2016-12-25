var util = require('util');
var events = require('events');

function Writer(){
    events.EventEmitter.call(this);
}

util.inherits(Writer, events.EventEmitter);
Writer.prototype.write = function(data) {
    this.emit("data", data);
};

var w = new Writer();
//console.log(w === instanceofevents.EventEmitter);
console.log(Writer.super_ === events.EventEmitter);
w.on('data', function(data){
    console.log('Received data: "' + data + '"');
});
w.write("Some Data!");