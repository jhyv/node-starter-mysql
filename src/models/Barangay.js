const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');

const Province = require('./Province');
const Municipality = require('./Municipality');

class Barangay extends Model {}

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
            model: 'Province',
            tableName: 'provinces',
            key: 'code'
        }
    },
    citymunCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Municipality',
            tableName: 'municipalities',
            key: 'code'
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
    targetKey: 'code',
    as: 'municipality'
});

Barangay.belongsTo(Province,{
    foreignKey: 'provCode',
    targetKey: 'code',
    as: 'province'
});

module.exports = Barangay;