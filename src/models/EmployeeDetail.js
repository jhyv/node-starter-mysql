const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');
const Group = require('./Group');

class EmployeeDetail extends Model {
    static tableName = "employee_details";
    static modelName = "EmployeeDetail";
}

EmployeeDetail.init({
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
            tableName: 'employees',
            key: 'employee_no',
            model: 'Employee'
        }
    },
    salary: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    designation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    hire_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    account_no: {
        type: DataTypes.STRING,
        allowNull: false
    },
    group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            tableName: 'groups',
            key: 'id',
            model: 'Group'
        }
    }
},{
    tableName: 'employee_details',
    sequelize,
    modelName: 'EmployeeDetail',
    updatedAt: 'updated_at',
    createdAt:'created_at'
})

EmployeeDetail.belongsTo(Group, {
    foreignKey: 'group_id',
    targetKey: 'id',
    as: 'group'
});


module.exports = EmployeeDetail;