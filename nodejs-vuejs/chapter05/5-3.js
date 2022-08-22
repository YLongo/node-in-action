const fs = require('fs');

// 异步操作的方法不能保证执行一定成功，所以文件操作的顺序在代码执行过程中非常重要
fs.rename('./tmp/hello', './tmp/world', (err) => {
    if (err) throw err;
    console.log('renamed complete');
});

// 会报错
fs.stat('./tmp/hello', (err, stats) => {
    if (err) throw err;

    console.log(`stats: ${JSON.stringify(stats)}`);
});