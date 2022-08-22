var dgram = require('dgram');

var socket = dgram.createSocket('udp4', function(msg, rinfo) {

});

socket.bind(41234, 'localhost', function() {
    console.log('bing 41234');
});