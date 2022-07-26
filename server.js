const express = require('express')
const app = express()
const port = 3000 

const cake = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",]

const fs = require('fs') // this engine requires the fs module like we did Saturday

app.engine('hypatia', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#head#' , '<head>' + options.title + '<title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
      .replace('#body#','<body>' + options.body + '<body>' )
    return callback(null, rendered)
  })
})
 
app.set('views', './')
app.set('view engine', 'hypatia')



app.get('/',(req,res) => { 
    res.render('1', { title: 'hi', body:'life is pain'})
})



app.get('/:cake', (req, res) => {
    res.send(`
      <h1>'There are so many cool types of cakes'</h1>
      <img src="https://cafedelites.com/wp-content/uploads/2018/05/Red-Velvet-Cake-IMAGE-43.jpg" >
      <img src="https://www.thespruceeats.com/thmb/ncrMXvJn8fch85FJxr47VOSz9sg=/1333x1000/smart/filters:no_upscale()/german-chocolate-cake-recipe-5208603-hero-01-cdbf1b82749a453894f67b806eef0caa.jpg" >
      <img src="https://sallysbakingaddiction.com/wp-content/uploads/2019/04/layer-lavender-cake.jpg" >
    `)
  })
  app.get('/:coffee', function(req, res) {
    console.log(req.params)
    console.log(req.query)
    res.render('1', { title: 'Love of coffee', body:'baking is a struggle but not as much as loving to keep baking ok baking yeah.~'})
  })
  app.get('/:Bread', function(req, res) {
    console.log(req.params)
    console.log(req.query)
    res.render('1', { title: 'Love of Bread', body:'baking is a struggle but not as much as loving to keep baking ok baking yeah.~'})
  })
  app.get('/:Savory pastries', function(req, res) {
    console.log(req.params)
    console.log(req.query)
    res.render('1', { title: 'Love of Savory pastries', body:'baking is a struggle but not as much as loving to keep baking ok baking yeah.~'})
  })
  app.get('/:Sugar art', function(req, res) {
    console.log(req.params)
    console.log(req.query)
    res.render('1', { title: 'Love of sugar art', body:'baking is a struggle but not as much as loving to keep baking ok baking yeah.~'})
  })
  app.get('/:Chocolates', function(req, res) {
    console.log(req.params)
    console.log(req.query)
    res.render('1', { title: 'Love of Chocolates', body:'baking is a struggle but not as much as loving to keep baking ok baking yeah.~'})
  })
  app.get('/:Pies', function(req, res) {
    console.log(req.params)
    console.log(req.query)
    res.render('1', { title: 'Love of pies', body:'baking is a struggle but not as much as loving to keep baking ok baking yeah.~'})
  })
  app.get('/:Dounuts', function(req, res) {
    console.log(req.params)
    console.log(req.query)
    res.render('1', { title: 'Love of dounuts', body:'baking is a struggle but not as much as loving to keep baking ok baking yeah.~'})
  })
  
  app.get('/:Desserts', (req, res) => {
      res.send(cake[req.params.cakeIndex])
      res.render('1', {body: 'My leastfavorite desert is veggies..if that makes.'})
    
  })
  app.get('/baker/:firstName', function(req, res) {
    console.log(req.params)
    console.log(req.query)
    res.render('1', { title: 'The world of baking', body:'baking is a struggle but not as much as loving to keep baking ok baking yeah.~'})
  })
  

app.listen(port,() => {
    console.log('I am listening on port' , port)
})