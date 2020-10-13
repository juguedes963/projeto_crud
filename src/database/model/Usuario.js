const { DataTypes, sequelize, QueryTypes } = require('../connection')
const modelUser = sequelize.define("user", {
    Cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nick: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },


}, {
    timestamps: false,
    tableName: 'user',
    freezeTableName: true
})
module.exports = { modelUser }