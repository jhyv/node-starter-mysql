const { verifyToken } = require('../utils/jwt');

const authenticate = verifyToken;

module.exports = { authenticate };