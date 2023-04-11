const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');
const Municipality = require('./Municipality');
const Province = require('./Province');

class Barangay extends Model {
    static tableName = "barangays";
    static modelName = "Barangay";
}

Barangay.init({
    brgyCode: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    provCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Province,
            tableName: Province.tableName,
            key: Province.primaryKeyAttribute
        }
    },
    citymunCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Municipality,
            tableName: Municipality.tableName,
            key: Municipality.primaryKeyAttribute
        }
    },
},{
    tableName: Barangay.tableName,
    sequelize,
    modelName: Barangay.modelName,
    timestamps: false
})

Barangay.belongsTo(Municipality,{
    foreignKey: 'citymunCode',
    targetKey: Municipality.primaryKeyAttribute,
    as: 'municipality'
});

Barangay.belongsTo(Province,{
    foreignKey: 'provCode',
    targetKey: Province.primaryKeyAttribute,
    as: 'province'
});

module.exports = Barangay;