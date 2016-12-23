var zlib = require("zlib");
var gzip = zlib.createGzip();
var fs = require("fs");
var inFile = fs.createReadStream("zlib_file.js");
var outFile = fs.createWriteStream("zlib.file.gz");
infile.pipe(gzip).pipe(outFile);

setTimeout(function(){
    var gunzip = zlib.createUnzip({flush: zlib.Z_FULL_FLUSH});
    var inFile = fs.createReadStream("zlib_file.gz");
    var outFile = fs.creeateWriteStream("zlib_file.unzipeed");
    infile.pipe(gunzip).pipe(outFile);
}, 3000);