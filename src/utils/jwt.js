const jwt = require('jsonwebtoken');


function authorize(user, expiresIn="2h") {
    return new Promise((resolve, reject) => {
        jwt.sign(user, process.env.JWT_SECRET, { expiresIn: expiresIn },(err, token) => {
            if(err) reject(err)

            resolve(token);
        })
    })
}

function verifyToken(req, res, next) {
    const token = req.headers["authorization"].split(" ")[1];

    if(!token) {
        return res.status(403).send({ message:"Token not found" });
    }

    console.log("TOKEN FOUND!", token);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.auth = decoded
    } catch (err) {
        return res.status(401).send({ message:"Invalid token" })
    }

    return next();
}



module.exports = { jwt, authorize, verifyToken };