var net = require('net');
var server = net.createServer(function(socket) {
    // 本地端口
    console.log('localPort: ' + socket.localPort);
    console.log('localAddress: ' + socket.localAddress);

    console.log('remotePort: ' + socket.remotePort);
    console.log('remoteAddress: ' + socket.remoteAddress);
});

server.listen(8001, function() {
    console.log('server is listening');
});