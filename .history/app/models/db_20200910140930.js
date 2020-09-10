const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

connection = mysql.createPool({
        host: dbConfig.HOST,
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        database: dbConfig.DB
    });

module.exports = connection;