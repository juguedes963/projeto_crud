const modelUser = require('../database/model/Usuario')
const classUser = require('../classes/usuario')
const { Op } = require('sequelize')
const tableUser = require('../database/tables/tables')
module.exports = {

    async createUser(req, resp) {
        const { Cpf, nome, senha, email, nick } = req.body
        console.log(nome, senha, email, Cpf, nick)
        const user = new classUser(senha, nome, email, Cpf, nick)

        const historicoUser = await modelUser.modelUser.findAll({
            where: {
                Cpf: {
                    [Op.like]: "%" + Cpf + "%"
                }
            }
        }).then(e => e)
       
        if (historicoUser == undefined) {
            const userDados = await modelUser.create(user)
            console.log(userDados)
            if (userDados instanceof modelUser) await userDados.save()
            return resp.send({ nome }).status(200)
        } else {
            return resp.send("usuario ja possui cadastro").status(301)
        }


    },
    async getUser(request, response) {
        const cpf = request.params.id

        const user = await modelUser.modelUser.findAll({
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
        const id = request.params.id
    },
    async deleteUser(request, response) {
        const id = request.params.id
    },
    async getAllUser(request, response) {
        const users = [await modelUser.modelUser.findAll().then(e => e)]
        const count = await modelUser.modelUser.count().then(e => e)
        console.log(count)
        response.send({ users, count })
    },


}