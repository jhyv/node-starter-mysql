const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');
const Employee = require('./Employee');
const AttendanceDetail = require('./AttendanceDetail');

class Attendance extends Model {
    static tableName = "attendances";
    static modelName = "Attendance";
}

Attendance.init({
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
            tableName: Employee.tableName,
            key: 'employee_no',
            model: Employee
        }
    },
    clocked_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true
    },
},{
    tableName: Attendance.tableName,
    sequelize,
    modelName: Attendance.modelName,
    updatedAt: 'updated_at',
    createdAt:'created_at'
})

Attendance.hasMany(AttendanceDetail,{
    foreignKey: 'attendance_id',
    targetKey: Attendance.primaryKeyAttribute,
    as: 'attendance_details'
})

module.exports = Attendance;