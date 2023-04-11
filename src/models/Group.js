const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');

class Group extends Model {
    static tableName = "groups";
    static modelName = "Group";
}

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
    tableName: Group.tableName,
    sequelize,
    modelName: Group.modelName,
    updatedAt: 'updated_at',
    createdAt:'created_at'
})

module.exports = Group;