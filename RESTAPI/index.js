const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const config = require('./config/static')
const webRouter = require('./Router/web')
const app = express()
const port = 3000


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

config(app)
webRouter(app)

app.listen(port, ()=>{
    console.log("Connected to server !!!")
})