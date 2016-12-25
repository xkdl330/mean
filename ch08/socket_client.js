var net = require('net');
function getConnection(connName){
    var client = net.connect({port:8107, hostname:'localhost'}, function(){
        console.log(connName + " connected: ");
        console.log(" local = %s:%s", this.localAddress, this.localPort);
        console.log(" remote = %s:%s", this.remoteAddress, this.localAddress);
        this.setTimeout(500);
        this.setEncoding('utf8');
        this.on('data', function(data){
            console.log(connName + " From Server: " + data.toString());
            this.end();
        });
        this.on('end', function(){
            console.log(connName + ' Client disconnected');
        });
        this.on('error', function(err){
            console.log('Socket Error: ', JSON.stringify(err));
        });
        this.on('timeout', function(){
            console.log('Socket Timed out');
        });
        this.on('close', function(){
            console.log('Socket Closed');
        });
    });
    return client;
}

function writeData(socket, data){
    var success = !socket.write(data);
    if(!success){
        (function(socket, data){
            socket.once('drain', function(){
                writeData(socket, data);
            });
        })(socket, data);
    }
}

var Dwarves = getConnection("Dwarves");
var Elves = getConnection("Elves");
var Hobbits = getConnection("Hobbits");
writeData(Dwarves, "More Axes");
writeData(Elves, "More Arrows");
writeData(Hobbits, "More Pipe weed");