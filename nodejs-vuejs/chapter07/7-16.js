const msyql = require('mysql');

const connection = msyql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connectin: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

connection.query('select * from user', function(err, rows) {
    if (err) {
        console.log(err);
    } else {
        console.log(rows);
    }
})
