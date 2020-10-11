const { DataTypes, sequelize,QueryTypes } = require('../connection')
const modelUserProduto = sequelize.define("userProdutos", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,        
        references:{
            model:'user',
            key:'Cpf'
        }
    },
    id_produto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references:{
            model:'produto',
            key:'nome'
        }
    },
})
module.exports = {modelUserProduto,QueryTypes}