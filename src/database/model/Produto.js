const { DataTypes, sequelize,QueryTypes } = require('../connection')
const modelProduto = sequelize.define("produtos", {
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
module.exports = {modelProduto,QueryTypes}