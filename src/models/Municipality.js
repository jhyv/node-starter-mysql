const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');
const Province = require('./Province');

class Municipality extends Model {
    static tableName = "municipalities";
    static modelName = "Municipality";
}


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
            model: Province,
            tableName: Province.tableName,
            key: 'code'
        }
    },
},{
    tableName: Municipality.tableName,
    sequelize,
    modelName: Municipality.modelName,
    timestamps: false
})

Municipality.belongsTo(Province,{
    foreignKey: 'provCode',
    targetKey: Province.primaryKeyAttribute,
    as: 'province'
});

module.exports = Municipality;