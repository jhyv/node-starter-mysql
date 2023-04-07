const User = require('../../models/User');
const { checkPassword } = require('../../utils/bcrypt');
const { authorize } = require('../../utils/jwt');

const login = async (req, res) => {

    const credentials = req.body;
    console.log(credentials);
    res.setHeader("Content-Type","application/json")

    const user = await User.findOne({
        where:{ email: req.body.email }
    })

    console.log(`User:`,user.name);

    if(!user) {
        res.status(404).send({
            message: 'User not found'
        })
    }


    if(checkPassword(credentials.password,user.password)) {   
        console.log(`Password matched`) 
        console.log(`Token generated ${await authorize(user.get())}`) 
        res.json({
            success: true,
            message: 'Authorized',
            data : {
                user:user,
                token: await authorize(user.get())
            }
        })
    } else {
        console.log(`Password does not match`)  
        res.status(401).send({
            message: 'Unauthorized'
        })
    }
}

module.exports = { login };