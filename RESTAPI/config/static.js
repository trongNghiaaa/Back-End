const express = require('express')
const app = express()


let config = (app) =>{
   app.use("/public", express.static("./RESTAPI/public"))
}

module.exports = config