const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

function getPool() {
    return mysql.createPool({
        host: dbConfig.HOST,
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        database: dbConfig.DB
    });
}
module.exports = connection;
