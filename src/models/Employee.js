const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');
const Province = require('./Province');
const Barangay = require('./Barangay');
const Municipality = require('./Municipality');
const EmployeeDetail = require('./EmployeeDetail');

class Employee extends Model {}

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
            model: 'User'
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
            tableName: 'barangays',
            key: 'brgyCode',
            model: 'Barangay'
        }
    },
    mun_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
            tableName: 'municipalities',
            key: 'code',
            model: 'Municipality'
        }
    },
    prov_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
            tableName: 'provinces',
            key: 'code',
            model: 'Province'
        }
    },
    active: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: '1'
    }
},{
    tableName: 'employees',
    sequelize,
    modelName: 'Employee',
    updatedAt: 'updated_at',
    createdAt:'created_at'
})

Employee.belongsTo(EmployeeDetail,{
    foreignKey: 'employee_no',
    targetKey: 'employee_no',
    as: 'employee_detail'
});

Employee.belongsTo(Barangay,{
    foreignKey: 'brgy_id',
    targetKey: 'brgyCode',
    as: 'barangay'
});

Employee.belongsTo(Municipality,{
    foreignKey: 'mun_id',
    targetKey: 'code',
    as: 'municipality'
});

Employee.belongsTo(Province,{
    foreignKey: 'prov_id',
    targetKey: 'code',
    as: 'province'
});


module.exports = Employee;