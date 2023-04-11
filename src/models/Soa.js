const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');
const Employee = require('./Employee');
const Period = require('./Period');

class Soa extends Model {}

Soa.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    employee_no: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: Employee,
            tableName: PerEmployeeiod.tableName,
            key: "employee_no"
        }
    },
    status: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: "0"
    },
    period_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Period',
            tableName: 'periods',
            key: 'id'
        }
    },
},{
    tableName: 'soa',
    sequelize,
    modelName: 'Soa',
    updatedAt: 'updated_at',
    createdAt:'created_at'
})

Soa.belongsTo(Period,{
    foreignKey: 'period_id',
    targetKey: 'id',
    as: 'period'
});

Soa.belongsTo(Employee,{
    foreignKey: 'employee_no',
    targetKey: 'employee_no',
    as: 'employee'
})

module.exports = Soa;