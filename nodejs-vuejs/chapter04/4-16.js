const util = require('util');

let obj = { keyWord: 'node.js', name: 'huruji' };

let str = util.inspect(obj, {
    'colors': true
});

console.log(str);