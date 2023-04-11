const express = require('express');
const router = express.Router();
const { getEmployees } = require('../../controllers/employees/employeesController');
const { authenticate } = require('../../middlewares/auth');

router.route('/').get(authenticate,getEmployees)

module.exports = router;