const express = require('express')
const controllerUser = require('../controllers/Usuario')
const routes = express.Router()
routes.get('/usuario=:id', controllerUser.getUser)
routes.post('/usuario', controllerUser.createUser)
routes.put('/usuario=:id', controllerUser.updateUser)
routes.delete('/usuario=:id', controllerUser.deleteUser)
routes.get('/usuario', controllerUser.getAllUser)
module.exports = routes