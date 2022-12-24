const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

// app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/public', express.static('./public'))

// app.get('/home', (req, res)=>{
    //     return res.json([1,2,3])
    // })
    
    app.get('/home', (req, res)=>{
        return res.sendFile(path.join(__dirname,'public/home.html'))
    })
    
    app.get('/search/:txt', (req,res)=>{
        return res.json(req.params.txt)
    })


    app.get('/search', (req , res) =>{
        return res.json('bạn đang tìm kiếm ' + req.query.txt)
    })
    
        
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname,'index.html'));
    });


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
