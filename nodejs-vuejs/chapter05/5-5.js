var fs = require('fs');

fs.stat('./tmp/world', function(err, stats) {
    console.log(stats);
});