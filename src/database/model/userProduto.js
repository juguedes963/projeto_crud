const { DataTypes, sequelize, QueryTypes } = require('../connection')
const modelUserProduto = sequelize.define("userProdutos", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    id_produto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'produto',
            key: 'id'
        }
    },
    timestamps: false,
    tableName: 'userProdutos',
    freezeTableName: true
})
module.exports = { modelUserProduto }