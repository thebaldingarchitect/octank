
const dotenv = require('dotenv');
dotenv.config();


module.exports = {
  HOST: process.env.HOST,
  USER: process.env.DBUSER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB
};

