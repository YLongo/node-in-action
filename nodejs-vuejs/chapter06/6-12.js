var net = require('net');

var client = net.Socket();

// 连接到服务器
client.connect(8001, '127.0.0.1', function() {
    console.log('connect the server');
    client.write('message from client');
});

// 监听服务器发送过来的数据
client.on('data', function(data) {
    console.log('the data of server is ' + data.toString());
});

client.on('end', function() {
    console.log('data end');
});

