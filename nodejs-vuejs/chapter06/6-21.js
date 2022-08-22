var dgram = require('dgram');

var message = new Buffer('some message from client');

var socket = dgram.createSocket('udp4');

socket.send(message, 0, message.length, 41234, 'localhost', function(err, bytes) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('client send ' + bytes + ' message');
});

socket.on('message', function(meg, rinfo) {
    console.log('some message from server');
});
