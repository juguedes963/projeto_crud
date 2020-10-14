//fazendo importação do express
const express = require('express')

//fazendo importação do cors
const cors = require('cors')

//importando a rota de produtos
const routesProdutos=require('./src/routes/routesProdutos')

//importando  a rota de usuario
const routesUser=require('./src/routes/routesUser')

const tabelas=require('./src/database/tables/tables')

//fazendo inicializao do app backend
const app = express()

//escolhendo a porta a ser utilizada para o servidor
const port =process.env.PORT|| 3002

//ativando o cors para nao ter block quando for utilizar a api
app.use(cors())

//fazendo importancao de recebimento via json (para converter em type json)
app.use(express.json())

//incluindo a rota de usuarios
app.use(routesUser)

//incluindo a rota de produtos
app.use(routesProdutos)

//startando o servidor
app.listen(port, () => {
        //se for aceito a porta acesse o seguinte URL
        console.log(`servidor rodando na porta http://localhost:${port}`)
}) 