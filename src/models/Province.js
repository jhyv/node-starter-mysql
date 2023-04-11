const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');

class Province extends Model {}

Province.init({
    code: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'provinces',
    sequelize,
    modelName: 'Province',
    timestamps: false
})

module.exports = Province;