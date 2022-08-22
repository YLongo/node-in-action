var fs = require('fs');

fs.appendFile('message.txt', 'data to append', 'utf8', (err) => {
    if (err) throw err;

    console.log('data was appended to file');
});