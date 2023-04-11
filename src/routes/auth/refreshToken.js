const express = require('express');
const router = express.Router();
const { refreshToken } = require('../../controllers/auth/authController');
const { authenticate } = require('../../middlewares/auth');

router.route('/').post(authenticate,refreshToken)

module.exports = router;