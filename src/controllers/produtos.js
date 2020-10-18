const { model } = require('../database/model/models')
const classProdutos = require('../classes/produtos')
const { Op } = require('sequelize')
module.exports = {
    async createProducts(request, response) {
        const { nome, valor, codProduto, quantidade } = request.body
        const produtos = new classProdutos(nome, valor, codProduto, quantidade)
        const produtosDados = await model.Produto.create(produtos).then(e => console.log(e)).catch(e => e)
        if (produtosDados instanceof model.Produto) await produtosDados.save()
        return response.send({ nome, quantidade }).status(200)
    },
    async getProducts(request, response) {
        const { codProduto } = request.params.id

        const Produto = await model.Produto.findAll({
            where: {
                codProduto: {
                    [Op.like]: "%" + codProduto + "%"
                }
            }
        }).then(e => e)
        response.send({ Produto })
    },
    async updateProducts(request, response) {       
        const codProduto = request.params.id
        const { nome, valor, quantidade } = request.body
        const produto = await model.Produto.update({
            nome,
            valor,
            codProduto,
            quantidade,
            where: {
                codProduto: {
                    [Op.like]: "%" + codProduto + "%"
                }
            }
        }).then(updateRows => {
            return response.json(updateRows)
        })
    },
    async deleteProducts(request, response) {
        const codProduto = request.params.id
        await model.Produto.destroy({
            where: {
                codProduto: {
                    [Op.like]: "%" + codProduto + "%"
                }
            }
        }).then(e => e)

        response.send("usuario deletado")
    },
    async getAllProducts(request, response) {
        const produtos = await model.Produto.findAll().then(e => e)
        const count = await model.Produto.count().then(e => e)

        response.send({ produtos, count })
    }

}