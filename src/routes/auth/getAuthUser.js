const express = require('express');
const router = express.Router();
const { getAuthUser } = require('../../controllers/auth/authController');
const { authenticate } = require('../../middlewares/auth');

router.route('/').get(authenticate, getAuthUser)

module.exports = router;