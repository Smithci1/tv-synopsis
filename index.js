const express = require('express')
const showdata = require('./showdata')
const path = require('path')
const app = express()
app.use(express.static('views'))
app.set('view engine', 'pug')
app.get('/', (req,res) => {
   return res.render('index',  {showdata})
})
app.get('/season/:id', (req, res) => {
    const season = showdata.seasons.find(season => season.number === parseInt(req.params.id))

    return res.render('season', { season, title: showdata.title })
  })
app.all('*',(req,res) =>{
    return res.status(404).sendFile(path.join(__dirname + '/404.html'))
})

app.listen(3370, () =>{
    console.log('hello! i am 3370')
})