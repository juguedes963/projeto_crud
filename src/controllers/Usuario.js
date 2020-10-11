const modelUser = require('../database/model/Usuario')
const classUser = require('../classes/usuario')
const { QueryTypes } = require('sequelize');
module.exports = {

    async createUser(req, resp) {
        const { nome, senha, email, Cpf, nick } = req.body
       
        const user = new classUser(nome, senha, email, Cpf,nick)

        const userDados = await modelUser.modelUser.create(user)
        console.log(userDados.Cpf)
        if (userDados instanceof modelUser.modelUser) await userDados.save()
        return resp.send({ nome }).status(200)
    },
    async getUser(request, response) {
        const id = request.params.id




        console.log(UserGetUser)
        response.send(id)
    },
    async updateUser(request, response) {
        const id = request.params.id
    },
    async deleteUser(request, response) {
        const id = request.params.id
    },
    async getAllUser(request, response) {
        const UserGetUser = await modelUser.modelUser.findAll()
    }

}