const mysql = require('mysql');

const connection = mysql.createConnection({
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

const table = 'user';

connection.query('select * from ??', [table], function(err, rows) {
    if (err) {
        console.log(err);
    } else {
        console.log(rows);
    }
});

