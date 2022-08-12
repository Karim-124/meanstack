var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var Product = require('./ProductController')

mongoose
  .connect('mongodb+srv://karim12345:Karim20202020@cluster0.uuwnfmf.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Connection failed!')
  })

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });  

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/' + 'Index.html')
})

app.get('/getProducts', function (reg, res) { 
  Product.find() 
  .then((data) => {
    console.log(data);
    res.send(data)
  })
})

app.get('/add', function (req, res) {
  res.sendFile(__dirname + '/' + 'AddProduct.html')
})

app.post('/insert', function (req, res) {
  let producttoinserted = new Product({
  id: req.body.id,
  product_name: req.body.product_name,
  specifctions: req.body.specifctions,
  product_img: req.body.product_img,
  price: req.body.price,
  quantity: req.body.quantity,
  category: req.body.category
  })

  producttoinserted.save().then(() => {
    console.log('Inserted')
    res.redirect('/')
  })
})

app.listen(3000, function () {
  console.log('Example app listening...')
})