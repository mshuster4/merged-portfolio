const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    USER: process.env.GMAIL_USER_NAME,
    PASS: process.env.GMAIL_USER_PASSWORD,
}