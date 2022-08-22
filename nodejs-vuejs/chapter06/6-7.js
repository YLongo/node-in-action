var net = require('net');

var server = net.createServer(function(socket) {
    
    // 监听客户端发送的数据
    socket.on('data', function(data) {
        console.log(data.toString());
    });
});

server.listen(8001, function() {
    console.log('server is listening');
});
