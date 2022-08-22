var net = require('net');

var server = net.createServer(function(socket) {
    console.log('someone connects');
});

server.listen(8001, function() {
    
    // 获取地址信息
    var address = server.address();

    console.log('the port of server is ' + address.port);
    console.log('the address of server if ' + address.address);
    console.log('the family of server is ' + address.family);
});