const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');
const Period = require('./Period')
const Employee = require('./Employee')

class Soa extends Model {
    static tableName = "soa";
    static modelName = "Soa";
}

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
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Period,
            tableName: Period.tableName,
            key: Period
        }
    },
},{
    tableName: Soa.tableName,
    sequelize,
    modelName: Soa.modelName,
    updatedAt: 'updated_at',
    createdAt:'created_at'
})

Soa.belongsTo(Period,{
    foreignKey: 'period_id',
    targetKey: Period.primaryKeyAttribute,
    as: 'period'
});

Soa.belongsTo(Employee,{
    foreignKey: 'employee_no',
    targetKey: 'employee_no',
    as: 'employee'
})

module.exports = Soa;