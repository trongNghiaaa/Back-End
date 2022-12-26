const express = require('express')
const path = require('path')
const classesModel = require('../model/classes')
const router = express.Router()


let webRouter = (app) =>{
    router.get('/', (req,res) => {
        res.send('Hiiiiiiiiiiii')
    })

    router.get('/classes', (req,res)=>{
        classesModel.find({})
        .then(data =>{
            res.json(data)
        }).catch(err => console.log(err))     
    })

    router.put('/classes/:name', (req,res)=>{
        classesModel.updateOne({name : req.params.name},{student: 40})
        .then(data => res.json(data))
        .catch(err => console.log(err)) 
    })
    
    router.post('/classes', (req, res)=>{
        classesModel.insertMany({name:"lop6",student: 20},{name:"lop7",student: 53})
        .then(data => res.json(data))
        .catch(err => console.log(err)) 
    })


    router.delete('/classes/:name',(req,res)=>{
        classesModel.deleteMany({name: req.params.name})
        .then(data => res.json(data))
        .catch(err => console.log(err)) 
    })


    return app.use('/', router)
}

module.exports = webRouter;