const jwt = require("jsonwebtoken")

const secretKey = "Secret key 123 Secret key 123 Secret key 123 Secret key 123";

const options = {
    expiresIn : "1d",
}

function token(payload) {
    return jwt.sign(payload, secretKey, options);
}

module.exports = token;