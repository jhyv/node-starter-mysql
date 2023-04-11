const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');

class Province extends Model {
    static tableName = "provinces";
    static modelName = "Province";
}


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
    tableName: Province.tableName,
    sequelize,
    modelName: Province.modelName,
    timestamps: false
})

module.exports = Province;