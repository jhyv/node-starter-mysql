const express = require('express');
const router = express.Router();
const { getUsers } = require('../../controllers/users/usersController');
const { authenticate } = require('../../middlewares/auth');

router.route('/').get(authenticate,getUsers)

module.exports = router;