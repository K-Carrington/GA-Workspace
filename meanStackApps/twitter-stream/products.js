var express = require('express'),
    products   = express.Router()
    
    products.route('/') // the rest of products path 
                        // is defined in the other file
    .get(function(req,res){
      res.send("display all products")
    })
    .post(function(req,res){
      res.json({"message":"add new product"})
    })
    .put(function(req,res){
      res.json({"message":"update product"})
    })
    .patch(function(req,res){
      res.json({"message":"update product"})
    })
    .delete(function(req,res){
      res.send("delete product")
    })

module.exports = products
