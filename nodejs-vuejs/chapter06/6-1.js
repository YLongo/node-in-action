var net = require('net');

// 创建tcp服务器
var server = net.createServer(function(socket) {
    console.log('someone connects');
})