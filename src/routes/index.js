const hello = require('./hello/hello');
const getUsers = require('./users/getUsers');
const getEmployees = require('./employees/getEmployees');
const login = require('./auth/login');
const getAuthUser = require('./auth/getAuthUser');
const refreshToken = require('./auth/refreshToken');

const routes = [
    { url:'/api/user', router:getAuthUser },
    { url:'/api/hello', router:hello },
    { url:'/api/users/all', router:getUsers },
    { url:'/api/employees/all', router:getEmployees },
    { url:'/api/login', router:login },
    { url:'/api/refresh', router:refreshToken },
];

module.exports = routes