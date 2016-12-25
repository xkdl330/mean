var fs = require('fs');

fs.stat('file_stats.js', function(err, stats){
    if(!err){
        console.log('stats: ' + JSON.stringify(stats, null, ' '));
        console.log(stats.isFile() ? "Is a File" : "Is not a File");
        console.log(stats.isSocket() ? "Is a Socket" : "Is not a Socket");
        stats.isDirectory();
        stats.isBlockDevice();
        stats.isCharacterDevice();
        stats.isFIFO();
        stats.isSocket();
    }
});