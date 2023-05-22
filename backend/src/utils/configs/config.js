require('dotenv').config();

const URI_DATABASE = process.env.URI_DATABASE;
const SECRET_KEY = process.env.SECRET_KEY;
const USER_EMAIL = process.env.USER_EMAIL;
const PASSWORD_EMAIL = process.env.PASSWORD_EMAIL;

module.exports = {
  URI_DATABASE,
  SECRET_KEY,
  USER_EMAIL,
  PASSWORD_EMAIL
};