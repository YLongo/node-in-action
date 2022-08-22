var path = require('path');

var str = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');

console.log(str);

// 报错
path.join('foo', {}, 'bar');