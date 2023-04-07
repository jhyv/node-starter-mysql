const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.route('/').get(async (req,res,next) => {
    const users = await User.findAll();

    res.json({
        success: true,
        message: 'success!',
        data: users
    });
})

module.exports = router;