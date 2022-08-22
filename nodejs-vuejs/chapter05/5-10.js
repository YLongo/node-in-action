var fs = require('fs');

fs.open('input.txt', 'r', function(err, fd) {
    var readBuffer = new Buffer(1024);
    var offset = 0;
    var len = readBuffer.length;
    // 从多少个字节开始读取
    var filePosition = 0;
    
    fs.read(fd, readBuffer, offset, len, filePosition, function(err, readByte) {
        console.log('读取数据总数: ' + readByte + ' bytes');
        console.log(readBuffer.slice(0, readByte));
    });

});