const express = require('express')
// const express = require('express')

const app = express()

app.listen('3000')

// app.use(express.json())

app.route('/').get((req, res) => res.send('Olá meu camarada'))