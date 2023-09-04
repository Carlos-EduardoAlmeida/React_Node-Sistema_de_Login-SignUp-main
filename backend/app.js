const express = require('express')
require('dotenv').config()
const app = express()
const router = require("./routes/routestodo.js")
const connectToDatabase = require('./database/connect.js')

const port = 3000

connectToDatabase()

app.use('/', router)

app.listen(port, ()=>console.log(`Server aberto na porta ${port}`))