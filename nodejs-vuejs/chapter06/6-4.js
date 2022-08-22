var net = require('net');

// 实例化一个服务器对象
var server = new net.Server();

// 监听connection事件
server.on('connection', function(socket) {
    console.log('someone connects');
});

// 设置监听端口
server.listen(18001);

// 设置监听时的回调函数
server.on('listening', function() {
    console.log('server is listening');
});

// 设置关闭时的回调函数
server.on('close', function() {
    console.log('server closed');
});

// 设置出错时的回调函数
server.on('error', function(err) {
    console.log('error');
})

