const express = require('express');
const router = express.Router();
const { login } = require('../../controllers/auth/authController');

router.route('/').post(login)

module.exports = router;