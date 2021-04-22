const express = require('express')
const app = express()
const showdata = require('./showdata')
app.set('view engine', 'pug')
app.use(express.static('views'))
app.get('/', (req,res) => {
    res.render('index')
})
app.all('*',(req,res) =>{
    return res.status(404).send('ummm.. where do you think your going??')
})

app.listen(3370, () =>{
    console.log('hello! i am 3370')
})