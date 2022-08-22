var net = require('net');

// 创建tcp服务器
var server = net.createServer(function(socket) {
    console.log('someone connects');
});

// 监听端口
server.listen(8001);

// 设置监听时的回调函数
server.on('listening', function() {
    console.log('server is listening');
});