const { DataTypes, sequelize,QueryTypes,queryInterface } = require('../connection')
const tableProduto = queryInterface.createTable("produtos", {
    valor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    }
})
module.exports = {tableProduto,QueryTypes}