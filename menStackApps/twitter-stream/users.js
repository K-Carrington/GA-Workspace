var express = require('express'),
    users   = express.Router()
    
    users.route('/users')
    .get(function(req,res){
      res.send("display all users")
    })
    .post(function(req,res){
      res.json({"message":"add new user"})
    })
    .put(function(req,res){
      res.json({"message":"update user"})
    })
    .patch(function(req,res){
      res.json({"message":"update user"})
    })
    .delete(function(req,res){
      res.send("delete user")
    })

module.exports = users
