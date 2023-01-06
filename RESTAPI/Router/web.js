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
    router.get('/classes/:id', (req,res)=>{
        classesModel.find({_id: req.params.id})
        .then(data =>{
            res.json(data)
        }).catch(err => console.log(err))     
    })

    router.put('/classes/:id', (req,res)=>{
        classesModel.updateOne({_id : req.params.id},{student: req.body.student})
        .then(data => res.json(data))
        .catch(err => console.log(err)) 
    })
    
    router.post('/classes', (req, res)=>{
        classesModel.create({
            name: req.body.name,
            student: req.body.student
        })
        .then(data => res.json(data))
        .catch(err => console.log(err)) 
    })


    router.delete('/classes/:id',(req,res)=>{
        classesModel.deleteMany({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => console.log(err)) 
    })


    return app.use('/', router)
}

module.exports = webRouter;