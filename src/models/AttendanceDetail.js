const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');
const Attendance = require('./Attendance');

class AttendanceDetail extends Model {}

AttendanceDetail.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    attendance_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'Attendance',
            tableName: 'attendances',
            key: 'id'
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
    tableName: 'attendance_details',
    sequelize,
    modelName: 'AttendanceDetail',
    updatedAt: 'updated_at',
    createdAt:'created_at'
})

AttendanceDetail.belongsTo(Attendance,{
    foreignKey:'attendance_id',
    targetKey: 'id',
    as: 'attendance'
})

module.exports = AttendanceDetail;