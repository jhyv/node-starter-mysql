const { sequelize } = require('../db/sequelize');
const { DataTypes, Model } = require('sequelize');
const Category = require('./Category');
const SubCategory = require('./SubCategory');
const Group = require('./Group');

class Product extends Model { }

Product.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: true
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            tableName: 'categories',
            key: 'id',
            model: 'Category'
        }
    },
    sub_category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            tableName: 'sub_categories',
            key: 'id',
            model: 'SubCategory'
        }
    },
    group_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            tableName: 'product_groups',
            key: 'id',
            model: 'ProductGroup'
        }
    },
    branch_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            tableName: 'branches',
            key: 'id',
            model: 'Branch'
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stock_warning: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stock_removal: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    active: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1
    },
}, {
    tableName: 'products',
    sequelize,
    modelName: 'Product',
    updatedAt: 'updated_at',
    createdAt: 'created_at'
})

Product.belongsTo(Category, {
    foreignKey: 'category_id',
    targetKey: 'id',
    as: 'category'
});

Product.belongsTo(SubCategory, {
    foreignKey: 'sub_category_id',
    targetKey: 'id',
    as: 'sub_category'
});

Product.belongsTo(Group, {
    foreignKey: 'group_id',
    targetKey: 'id',
    as: 'group'
});

module.exports = Product;