const express = require('express');
const router = express.Router();

router.route('/').get((req, res, next) => {
    res.json({
        success: true,
        message: "Hello"
    })
})

module.exports = router;