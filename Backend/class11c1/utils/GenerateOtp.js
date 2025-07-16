const crypto = require("crypto");

function GenerateOtp() {
    return crypto.randomInt(1000, 9999).toString();
}
module.exports = GenerateOtp;