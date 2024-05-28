const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db/sequelize');

class ProductGroup extends Model { }

ProductGroup.init({
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
    tableName: 'product_groups',
    sequelize,
    modelName: 'ProductGroup',
    timestamps: false
})

module.exports = ProductGroup;