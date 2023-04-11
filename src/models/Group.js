const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');

class Group extends Model {}

Group.init({
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
    tableName: 'groups',
    sequelize,
    modelName: 'Group',
    updatedAt: 'updated_at',
    createdAt:'created_at'
})

module.exports = Group;