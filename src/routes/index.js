const hello = require('./hello/hello');
const getUsers = require('./users/getUsers');
const getEmployees = require('./employees/getEmployees');
const login = require('./auth/login');

const routes = [
    { url:'/api/hello', router:hello },
    { url:'/api/users/all', router:getUsers },
    { url:'/api/employees/all', router:getEmployees },
    { url:'/api/login', router:login },
];

module.exports = routes