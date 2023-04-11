const jwt = require('jsonwebtoken');


const authorize = (user, expiresIn="7d") => {
    return new Promise((resolve, reject) => {
        jwt.sign({user, iat: Date.now() }, process.env.JWT_SECRET, { expiresIn: expiresIn,  },(err, token) => {
            if(err) reject(err)
            console.log("GENERATED NEW TOKEN", token);

            resolve(token);
        })
    })
}

const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"].split(" ")[1];

    if(!token) {
        return res.status(403).send({ message:"Token not found" });
    }

    console.log("TOKEN FOUND!", token);

    try {
        jwt.verify(token, process.env.JWT_SECRET,(err, decoded) => {
            if(err) {
                if(err.name == "TokenExpiredError") {
                    res.status(401).send({  message:err.name });
                }
            }
            else {
                req.auth = decoded
                return next();
            }

        });
    } catch (err) {
        return res.status(401).send({ message:"Invalid token" })
    }
}


const refreshBearerToken = async (req, res) => {
    try {
        console.log("REFRESHING TOKEN")
        if(req.auth) console.log("User Found",req.auth)

        const token = await authorize(req.auth).catch(err => {
            console.log("REFRESH TOKEN FAILED", err);
        });

        res.json({
            success: true,
            message: 'token refreshed!',
            token: token
        })
    } catch (error) {
        return res.status(401).send({ message: error })
    }
}


module.exports = { jwt, authorize, verifyToken, refreshBearerToken };