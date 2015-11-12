//To get from another server
var requestModule = require('request')
//To send to client
var express = require('express')
var app = express();


var myImage = null;



//Send to client when they go to /:
app.get('/:subreddit', function(request, responseOut) {
    //Get from another server
    requestModule('http://reddit.com/r/' + request.params.subreddit + 
	        '.json', function(err, response, body) {
	if (err) throw err;
	//JSON.parse(string) changes it into a JS object

	//TBD need to check if children[1] is non null(see below)
	myImage = JSON.parse(body).data.children[1].data.thumbnail;
	console.log("image url = " + myImage);
	console.log("score = " + JSON.parse(body).data.children[1].data.score);
});

	responseOut.send('<img src="' + myImage + '">');
});
app.listen(3000, function(){
	console.log("Server running......");
});

/*
requestModule(searchString, function(err, response, body){
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
*/