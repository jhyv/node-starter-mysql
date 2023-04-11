const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');
const Soa = require('./Soa');

class Period extends Model {
    static tableName = "periods";
    static modelName = "Period";
}

Period.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue: "0"
    },
},{
    tableName: Period.tableName,
    sequelize,
    modelName: Period.modelName,
    updatedAt: 'updated_at',
    createdAt:'created_at'
})

Period.hasMany(Soa,{
    foreignKey: 'period_id',
    targetKey: Period.primaryKeyAttribute,
    as: 'soa_list'
})

module.exports = Period;