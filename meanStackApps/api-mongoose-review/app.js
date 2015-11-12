var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/giphy', function() {
	console.log('Connected to the db!');
});

//import routers here...
var giphyRoutes = require('./routes/api.js');



//middleware here...

//routes here...
app.get('/', function(req,res) {
	console.log(req.url);
	//res.send('<h1>Hello</h1>');
	res.json({message: "Hello!"});
});

app.use('/giphy', giphyRoutes); //conects this server to my giphy server i/f

app.listen(3000, function(){
	console.log('App server is running!')
});


