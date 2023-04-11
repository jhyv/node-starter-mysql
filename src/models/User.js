const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');
const Role = require('./Role');
const Employee = require('./Employee');

class User extends Model {
    static tableName = "users";
    static modelName = "User";
}

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
            tableName: Role.tableName,
            key: Role.primaryKeyAttribute,
            model: Role
        }
    }
},{
    tableName: User.tableName,
    sequelize,
    modelName: User.modelName,
    updatedAt: 'updated_at',
    createdAt:'created_at'
})

User.belongsTo(Role,{
    foreignKey: 'role_id',
    targetKey: 'id',
    as:'role'
});

User.hasOne(Employee, {
    foreignKey: 'user_id',
    targetKey: 'id',
    as: 'employee'
})

module.exports = User;