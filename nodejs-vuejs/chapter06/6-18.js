var dgram = require('dgram');

var socket = dgram.createSocket('udp4');

socket.bind(41234, 'localhost', function() {
    console.log('bind 41234');
});

socket.on('message', function(msg, rinfo) {
    console.log(msg.toString());
});

