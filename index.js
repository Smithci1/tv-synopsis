const express = require('express')
const app = express()
const path = require('path')
const showdata = require('./showdata')
app.set('view engine', 'pug')
app.use(express.static('views'))
app.get('/', (req,res) => {
    res.render('index', {showdata})
})

app.all('*',(req,res) =>{
    return res.status(404).sendFile
    (path.join(__dirname + '/404.html'))
})

app.listen(3370, () =>{
    console.log('hello! i am 3370')
})