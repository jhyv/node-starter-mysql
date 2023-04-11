const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');
const AttendanceDetail = require('./AttendanceDetail');

class Attendance extends Model {}

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
            tableName: 'employees',
            key: 'employee_no',
            model: 'Employee'
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
    tableName: 'attendances',
    sequelize,
    modelName: 'Attendance',
    updatedAt: 'updated_at',
    createdAt:'created_at'
})

Attendance.hasMany(AttendanceDetail,{
    foreignKey: 'attendance_id',
    targetKey: 'id',
    as: 'attendance_details'
})

module.exports = Attendance;