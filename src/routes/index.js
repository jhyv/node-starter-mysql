const hello = require('./hello/hello');
const getUsers = require('./users/getUsers');
const getEmployees = require('./employees/getEmployees');
const login = require('./auth/login');
const getAuthUser = require('./auth/getAuthUser');
const refreshToken = require('./auth/refreshToken');
const getProducts = require('./products/getProducts');

const routes = [
    { url: '/api/user', router: getAuthUser },
    { url: '/api/hello', router: hello },
    { url: '/api/users/all', router: getUsers },
    { url: '/api/employees/list', router: getEmployees },
    { url: '/api/products/list', router: getProducts },
    { url: '/api/login', router: login },
    { url: '/api/refresh', router: refreshToken },
];

module.exports = routes