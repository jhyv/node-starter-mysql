const User = require('../../models/User');

const getUsers = async (req,res,next) => {
    try {
        const users = await User.findAll();

        res.json({
            success: true,
            message: 'success!',
            data: users
        });
    } catch (error) {
        res.status(500).send({ message:error })
    }
}

module.exports =  { getUsers };