const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');

class Role extends Model {}

Role.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    tableName: 'roles',
    sequelize,
    modelName: 'Role',
    timestamps: false
})


module.exports = Role;