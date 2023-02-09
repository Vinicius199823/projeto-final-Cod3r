const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./API/validation.js')
    .then('./API/')
    .then('./config/routes.js')
    .into(app)

app.listen(3001, ()=>{
    console.log('Worked')
})