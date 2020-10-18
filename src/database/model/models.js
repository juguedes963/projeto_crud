const { DataTypes, sequelize } = require('../connection')
const model = {}
model.Produto = sequelize.define("produtos", {
    valor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codProduto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
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
    tableName: 'produtos',
    freezeTableName: true
}
)
model.User = sequelize.define("user", {
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
    adicionefreezeTableName: true,
    freezeTableName: true
})
model.userProduto = sequelize.define("userProdutos", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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
        references: {
            model: 'produto',
            key: 'id'
        }
    },
},

    {
        timestamps: false,
        tableName: 'userProdutos',
        freezeTableName: true,
        adicionefreezeTableName: true,
    })
module.exports = { model }