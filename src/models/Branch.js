const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db/sequelize');

export class Branch extends Model { }

Branch.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'branches',
    sequelize,
    modelName: 'Branch',
    timestamps: false
})

module.exports = Branch;