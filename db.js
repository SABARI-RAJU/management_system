var mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
var connection = mysql.createConnection({
    host     : process.env.host,
    user     : process.env.user,
    password : process.env.password,
    database : process.env.database
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;