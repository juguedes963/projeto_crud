const express = require('express')
const controllerProdutcs = require('../controllers/produtos')
const routes = express.Router()
routes.get('/produtos=:id', controllerProdutcs.getProducts)
routes.post('/produtos', controllerProdutcs.createProducts)
routes.put('/produtos=:id', controllerProdutcs.updateProducts)
routes.delete('/produtos=:id', controllerProdutcs.deleteProducts)
routes.get('/produtos', controllerProdutcs.getAllProducts)
module.exports = routes