const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

const userid = 5;
let sql = 'select * from user where id = ' + connection.escape(userid);

connection.query(sql, function(err, rows) {
    if (err) {
        console.log(err);
    } else {
        console.log(rows);
    }
})
