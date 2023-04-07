const hello = require('./hello/hello');
const getUsers = require('./users/getUsers');
const login = require('./auth/login');

const routes = [
    { url:'/api/hello', router:hello },
    { url:'/api/users/all', router:getUsers },
    { url:'/api/login', router:login },
];

module.exports = routes