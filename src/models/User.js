const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');
const Role = require('./Role');

class User extends Model {}

User.init({
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
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email_verified_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    remember_token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            tableName: 'roles',
            key: 'id',
            model: Role
        }
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
},{
    tableName: 'users',
    sequelize,
    modelName: 'User',
    updatedAt: 'updated_at',
    createdAt:'created_at'
})

User.belongsTo(Role,{
    foreignKey: 'role_id'
});

module.exports = User;