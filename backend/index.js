const express = require('express')
const app = express() //inicializando o modulo express
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-wiior.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({message: 'Bem vindo a semana Omnistack!'})
})

app.listen(3333)

