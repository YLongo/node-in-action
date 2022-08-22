const fs = require('fs');

// ./ 代表当前工作空间所在的目录
// 异步删除tmp目录下的hello文件
fs.unlink('./tmp/hello', (err) => {
    if (err) throw err;
    console.log('successfully deleted ./tmp/hello');
});