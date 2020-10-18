const model = require('../database/model/models')
const cript = require('./cript')

const { Op } = require('sequelize')
module.exports = {
    async SessionLogin(request, response, next) {
        const { email, senha } = request.body

        const user = await model.model.User.findOne({
            where: {
                email: {
                    [Op.like]: "%" + email + "%"
                }
            }
        }).then(e => e).catch(e => e)
        if (user) {
            const permision = await cript.checkPassword(senha, user.senha)
            if (permision == true) {
                console.log("permision")
                next()
                response.send("logado").status(200)
            } else {

                response.send("verifique se escreveu a senha corretamente").status(401)
            }
        }
        response.send("email nao foi encontrado").status(401)

    }
}