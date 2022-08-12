const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
  id: Number,
  product_name: String,
  specifctions: String,
  product_img: String,
  price: Number,
  quantity: Number,
  category: String
})

module.exports = mongoose.model('Product', productSchema)