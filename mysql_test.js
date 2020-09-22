var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "******",
    database: "fintech",
});

connection.connect();

connection.query("SELECT * from user", function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results[0].name);
});

connection.end();
