const {model}  = require('../database/model/models')
const classUser = require('../classes/usuario')
const { Op } = require('sequelize')

module.exports = {

    async createUser(req, resp) {
        const { Cpf, nome, senha, email, nick } = req.body
        const user = new classUser(senha, nome, email, Cpf, nick)
        const count = await model.User.count({
            where: {
                Cpf: {
                    [Op.like]: "%" + Cpf + "%"
                }
            }
        }).then(e => e)
        if (count === 0) {
            const userDados = await model.User.create(user).then(e => e)
            if (userDados instanceof model.User) await userDados.save()
            return resp.send({ nome }).status(200)
        } else {
            return resp.send("usuario ja possui cadastro").status(301)
        }


    },
    async getUser(request, response) {
        const cpf = request.params.id

        const user = await model.User.findAll({
            where: {
                Cpf: {
                    [Op.like]: "%" + cpf + "%"
                }
            }
        }).then(e => e)
        console.log(user)


        response.send({ user })
    },
    async updateUser(request, response) {
        const cpf = request.params.id
        const user=await model.User.update({
            where: {
                Cpf: {
                    [Op.like]: "%" + cpf + "%"
                }
            }
        }).then(e=>e)
        console.log(user)
    },
    async deleteUser(request, response) {
        const cpf = request.params.id
        const user=await model.User.destroy({
            where: {
                Cpf: {
                    [Op.like]: "%" + cpf + "%"
                }
            }
        }).then(e=>e)
       
        response.send("usuario deletado")
    },
    async getAllUser(request, response) {
        const users = await model.User.findAll().then(e => e)
        const count = await model.User.count().then(e => e)
        console.log(count)
        response.send({ users, count })
    },


}