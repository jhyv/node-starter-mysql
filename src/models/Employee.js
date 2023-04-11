const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');
const User = require('./User');
const Municipality = require('./Municipality');
const Province = require('./Province');
const Barangay = require('./Barangay');
const EmployeeDetail = require('./EmployeeDetail');

class Employee extends Model {
    static tableName = "employees";
    static modelName = "Employee";
}

Employee.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middle_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    suffix: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    contact_no: {
        type: DataTypes.STRING(13),
        allowNull: true
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    gender: {
        type: DataTypes.STRING(1),
        allowNull: true
    },
    marital_status: {
        type: DataTypes.STRING(2),
        allowNull: true
    },
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            tableName: 'users',
            key: 'id',
            model: User
        }
    },
    employee_no: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: true
    },
    brgy_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
            tableName: Barangay.tableName,
            key: Barangay.primaryKeyAttribute,
            model: Barangay
        }
    },
    mun_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
            tableName: Municipality.tableName,
            key: Municipality.primaryKeyAttribute,
            model: Municipality
        }
    },
    prov_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
            tableName: Province.tableName,
            key: Province.primaryKeyAttribute,
            model: Province
        }
    }
},{
    tableName: Employee.tableName,
    sequelize,
    modelName: Employee.modelName,
    updatedAt: 'updated_at',
    createdAt:'created_at'
})

Employee.EmployeeDetail = Employee.belongsTo(EmployeeDetail,{
    foreignKey: 'employee_no',
    targetKey: 'employee_no',
    as: 'employee_detail'
});

Employee.belongsTo(Barangay,{
    foreignKey: 'brgy_id',
    targetKey: Barangay.primaryKeyAttribute,
    as: 'barangay'
});

Employee.belongsTo(Municipality,{
    foreignKey: 'mun_id',
    targetKey: Municipality.primaryKeyAttribute,
    as: 'municipality'
});

Employee.belongsTo(Province,{
    foreignKey: 'prov_id',
    targetKey: Province.primaryKeyAttribute,
    as: 'province'
});


module.exports = Employee;