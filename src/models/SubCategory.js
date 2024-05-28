const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db/sequelize');

class SubCategory extends Model { }

SubCategory.init({
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
    tableName: 'sub_categories',
    sequelize,
    modelName: 'SubCategory',
    timestamps: false
})

module.exports = SubCategory;