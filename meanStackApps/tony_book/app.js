var express = require('express')
,       app = express()
,    logger = require('morgan')
,bodyParser = require('body-parser')
, mongoose  = require('mongoose')

mongoose.connect('mongodb://localhost/users', function() {
	console.log('Connected to users db!');
});

//Track request made to the app (using middleware aka s/w that runs before other s/w)
app.use(logger('dev'))

//Make JSON objs available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extnded: false}))

//Create the route route
app.get('/', function(req, res) {
  //User.find({}, function(err,users) {
  //	if(err) console.log(err);
  //	res.json(users);
  res.send('Welcome to the home page')
  //});
})

//To be moved to the controller:
//Testing User model:
//var User = require('./models/user.js')
//var user1 = new User({user_name: 'toneloke', email: 't.com'})
//console.log(user1)


//This is last thing for app.js
//Import user routes
var userRoutes = require('./routes/user_routes.js')
app.use('/users', userRoutes)
app.listen(3000);
//console.log(app)
console.log('Server is running on 3000')