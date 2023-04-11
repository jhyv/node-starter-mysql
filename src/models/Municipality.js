const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');
const Province = require('./Province');

class Municipality extends Model {}

Municipality.init({
    code: {
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
},{
    tableName: 'municipalities',
    sequelize,
    modelName: 'Municipality',
    timestamps: false
})

Municipality.belongsTo(Province,{
    foreignKey: 'provCode',
    targetKey: 'code',
    as: 'province'
});

module.exports = Municipality;