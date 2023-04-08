const express = require('express');
const router = express.Router();
const { getUsers } = require('../../controllers/users/usersController');
const { authenticate } = require('../../middlewares/auth');

router.route('/').get(authenticate,getUsers)

module.exports = router;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InN1cGVyYWRtaW4iLCJlbWFpbCI6InN1cGVyYWRtaW5AZW1haWwuY29tIiwiZW1haWxfdmVyaWZpZWRfYXQiOiIyMDIzLTAzLTAyVDAyOjIwOjM3LjAwMFoiLCJwYXNzd29yZCI6IiQyeSQxMCRGeDkwR1ZyNFNHOHNwZEM2NnJ2Z3hPZno2NlFyYU9VcTlBaGZSbWtLYUhjaFJVaWY2Lmc0RyIsInJlbWVtYmVyX3Rva2VuIjoiZzc4TFhZdlJIayIsInJvbGVfaWQiOjEsImNyZWF0ZWRfYXQiOiIyMDIzLTAzLTAyVDAyOjIwOjM3LjAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAyMy0wMy0wMlQwMjoyMDozNy4wMDBaIiwiaWF0IjoxNjgwODY0NTY1fQ.8KusvkszHv2r4bAyTrbKChGh-pBZtA8XHRG-Ko2kEss