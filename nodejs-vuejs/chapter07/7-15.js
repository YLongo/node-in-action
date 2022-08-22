const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
});


connection.connect(function(err) {
    if (err) {
        console.error('error conecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
})


