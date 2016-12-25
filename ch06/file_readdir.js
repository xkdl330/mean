var fs = require('fs');
var Path = require('path');

function WalkDirs(dirPath){
    console.log(dirPath);
    fs.readdir(dirPath, function(err, entries){
        for(var idx in entries){
            var fullpath = Path.join(dirPath, entries[idx]);
            (function(fullPath){
                fs.stat(fullPath, function(err, stats){
                    if(stats && stats.isFile()){
                        console.log(fullPath);
                    }
                    else if(stats && stats.isDirectory()){
                        WalkDirs(fullPath);
                    }
                });
            })(fullpath);
        }
    });
}
WalkDirs("../ch06");