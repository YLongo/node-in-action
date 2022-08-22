var net = require('net');

var server = net.createServer(function(socket) {
    console.log('someone connects');

    // 设置最大连接数
    server.maxConnections = 3;

    server.getConnections(function(err, count) {
        console.log('the count of client is ' + count);
    });

});

server.listen(8001, function() {
    console.log('server is listening');
});