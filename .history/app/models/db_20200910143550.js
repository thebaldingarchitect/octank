const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
var connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbpassword,
    database: dbConfig.DB
});
module.exports = connection;
