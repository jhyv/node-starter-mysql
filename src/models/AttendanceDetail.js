const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');
const Attendance = require('./Attendance');

class AttendanceDetail extends Model {
    static tableName = "attendance_details";
    static modelName = "AttendanceDetail";
}

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
            model: Attendance,
            tableName: Attendance.tableName,
            key: Attendance.primaryKeyAttribute
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
    tableName: AttendanceDetail.tableName,
    sequelize,
    modelName: AttendanceDetail.modelName,
    updatedAt: 'updated_at',
    createdAt:'created_at'
})

AttendanceDetail.belongsTo(Attendance,{
    foreignKey:'attendance_id',
    targetKey: Attendance.primaryKeyAttribute,
    as: 'attendance'
})

module.exports = AttendanceDetail;