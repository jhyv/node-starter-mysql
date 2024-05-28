const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db/sequelize');

class Category extends Model { }

Category.init({
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
    tableName: 'categories',
    sequelize,
    modelName: 'Category',
    timestamps: false
})

module.exports = Category;