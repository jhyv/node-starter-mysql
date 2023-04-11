const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');

class Role extends Model {
    static tableName = "roles";
    static modelName = "Role";
}

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
    tableName: Role.tableName,
    sequelize,
    modelName: Role.modelName,
    timestamps: false
})


module.exports = Role;