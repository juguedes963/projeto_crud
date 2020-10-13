const express = require('express')
const cors = require('cors')
const routesProdutos=require('./src/routes/routesProdutos')
const routesUser=require('./src/routes/routesUser')

const app = express()
const port =process.env.PORT|| 3002
app.use(cors())

app.use(express.json())
app.use(routesUser)
app.use(routesProdutos)
app.listen(port, () => {
        console.log(`servidor rodando na porta ${port}`)
}) 