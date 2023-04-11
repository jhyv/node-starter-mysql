const User = require('../../models/User');
const Role = require('../../models/Role');
const Employee = require('../../models/Employee');
const { Op } = require('sequelize');

const getUsers = async (req,res,next) => {
    try {
        const users = await User.findAll({
            include: [
                { model:Role, as: 'role' }
            ],
            where:{
                role_id: {
                    [Op.not]: 1 
                }
            }
        }).catch((error) => {
            console.log("SQL ERROR:", error)
        });
        
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