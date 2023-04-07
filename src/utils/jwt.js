const jwt = require('jsonwebtoken');


function authorize(user) {
    return new Promise((resolve, reject) => {
        jwt.sign(user, process.env.JWT_SECRET, (err, token) => {
            if(err) reject(err)

            resolve(token);
        })
    })
}

module.exports = { jwt, authorize };