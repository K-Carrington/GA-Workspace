var express    = require('express'),
    app        = express(),
    mongoose   = require('mongoose'),
    logger     = require('morgan'),
    bodyParser = require('body-parser'),
    port       = process.env.PORT || 3000;

// let us connect to mongo
mongoose.connect('mongodb://localhost/top_movies');

//log requests made to the app
app.use(logger('dev'));

//set the public folder as the static assets server folder
app.use(express.static('public'));

//Set up database commection
//create a movie schema
//title,name,year,rating,views,running_time,genres 
var movieSchema = new mongoose.Schema({
	title: String,
	name:  String,
	year:  Number,
	rating: Number,
	views:  Number,
	running_time: String,
	genere:  String
});

//Movie is a collection in the db
var Movie = mongoose.model('Movie', movieSchema);

app.get('/movies', function(req, res){
	Movie.find({}).sort({year: -1}).exec(function(err, movies){
		res.json(movies)
	});
	/*
  Movie.find({}, function(err, movies) {
    if (err) throw err
    res.json(movies);
  });
*/
});

app.get('/movies/:id', function(req, res) {
  Movie.findById(req.params.id, function(err, movie){
    if(err) res.send(err)
    res.json(movie)
  })
});

app.listen(port, function(){
	console.log('Server started');
});