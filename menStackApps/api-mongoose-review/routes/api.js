var express = require('express');
var giphyRouter = express.Router();
var request = require('request');

//import image model
var Image = require('../models/Image.js');

//test image model
/*
var someImage = Image({
  image_url: "http://testing123.com/image.jpg"
});
someImage.save(function(err) {
	if (err) throw err;
	console.log("Test image created!")
}) */

giphyRouter.get('/', function(req,res) {
	res.json({message: "This router is working!"});
});

giphyRouter.get('/random', function(req, res) {
  var requestUrl = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
  request(requestUrl, function(err, response, body) {
  	//response to the user
    //res.json(JSON.parse(body));
    var imgUrl = JSON.parse(body).data.image_original_url;
    res.send('<img src="' + imgUrl + '">');

    //Record imgUrl to the database...
    var someImage = Image({
      image_url: imgUrl
    });
    someImage.save(function(err) {
      if (err) throw err;
	  console.log("image created!")
    })
  })
});

module.exports = giphyRouter;
