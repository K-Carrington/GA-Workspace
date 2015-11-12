var express = require('express')
var giphy = express.Router()
var request = require('request')

giphy.get('/:query', function(req, res) {
  var searchString = "http://api.giphy.com/v1/gifs/search?q=" +
    req.params.query + "&api_key=dc6zaTOxFJmzC"

  //Newest thing learned to date:
  request(searchString, function(err, response, body){
    //console.log(body)
    //res.send(JSON.parse(body))
    var r_num = Math.floor((Math.random()*(JSON.parse(body).data).length))
    if (JSON.parse(body).data[r_num]) {
      var imgSrc = JSON.parse(body).data[r_num].images.fixed_height.url
      res.send('<img src="' + imgSrc + '">')
    }
    else {
      res.send("Sorry couldn't find anything with " + req.params.query)
    }

  })
})


module.exports = giphy