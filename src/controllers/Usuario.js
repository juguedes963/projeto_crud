const modelUser = require('../database/model/Usuario')
const classUser = require('../classes/usuario')
const { Op } = require('sequelize')

module.exports = {

    async createUser(req, resp) {
        const { Cpf, nome, senha, email, nick } = req.body
        const user = new classUser(senha, nome, email, Cpf, nick)
        const count = await modelUser.modelUser.count({
            where: {
                Cpf: {
                    [Op.like]: "%" + Cpf + "%"
                }
            }
        }).then(e => e)
        if (count === 0) {
            const userDados = await modelUser.modelUser.create(user).then(e => e)
            if (userDados instanceof modelUser.modelUser) await userDados.save()
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
        const cpf = request.params.id
        const user=await modelUser.modelUser.update({
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
        const user=await modelUser.modelUser.destroy({
            where: {
                Cpf: {
                    [Op.like]: "%" + cpf + "%"
                }
            }
        }).then(e=>e)
       
        response.send("usuario deletado")
    },
    async getAllUser(request, response) {
        const users = await modelUser.modelUser.findAll().then(e => e)
        const count = await modelUser.modelUser.count().then(e => e)
        console.log(count)
        response.send({ users, count })
    },


}