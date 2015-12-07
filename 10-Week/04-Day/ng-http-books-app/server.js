var express		= require('express'),
	app			= express(),
	logger		= require('morgan'),
	bodyParser	= require('body-parser'),
	mongoose	= require('mongoose'),
	port 		= process.env.PORT || 3000,
	bookRoutes 	= require('./routes/book_routes.js')

//establish connection to mongo database
mongoose.connect('mongodb://localhost/ng_http_books')

//logs requests made to the app
app.use(logger('dev'))

//makes json objects available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//Set the static files folder
app.use(express.static('public'));

//create the root route
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html')
})

//use book routes for those routes
app.use('/books', bookRoutes)

//sets the port for the server
app.listen(port, function(){
	console.log('Server started on', port)
})