const crypto = require('crypto');
const config = require('../config');
const bcrypt = require('bcrypt');
let password = (pass)=>{

    const hash=crypto.createHmac('sha256',config.key.secret)
    .update(pass)
    .digest('hex');
    return hash;
}

module.exports = {
    password: password
};