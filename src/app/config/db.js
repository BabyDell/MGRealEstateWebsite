const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "onthatgrind",
    database: "test"
});

db.connect((err) => {
    if (err) {
        console.log("Error connecting to MySQL Database", err);
    } else {
        console.log("Connected to MySQL Database");
    }
});

module.exports = db;