var express = require('express'),
    logger  = require('morgan'),
 bodyParser = require('body-parser'),
    app     = express(),
    users  = express.Router()


app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/canabliss'); //last part is db name

var User = require('./models/user.js');

var Andy = new User({
	first_name: "Andy",
    last_name: "Kim",
    email: "andy6@kim.com"
 });
Andy.sayHello();

//Andy.save(function(err) {
//	if (err) console.log("There was an error: " + err);
//	else console.log("user created");
//});
/*
User.find({}, function(err, users) {
  if (err) throw err;
  console.log(users);
});

User.update({email: "andy3@kim.com"}, {$set: {last_name: "tony"}}, function(err, user){
  if (err) throw err;
  console.log(user);
});

User.remove({email: "andy4@kim.com" }, function(err, user) {
  if (err) throw err;
  console.log(user);
  console.log('User successfully deleted!');
});
*/
//User.findOneAndRemove({email: "andy5@kim.com" }, function(err, user) {
//  if (err) throw err;
//  console.log(user);
//  console.log('User successfully deleted!');
//});

users.get('/', function(req, res) {
  User.find({}, function(err,users) {
  	if(err) console.log(err);
  	res.json(users);
  });
});
/*
users.get('/:id', function(req, res) {
	User.find({}, function(err,users) {
	  if(err) console.log(err);
	  res.json(users[req.params.id])	
	})
})
*/
users.get('/:email', function(req,res) {
	User.find({email: req.params.email}, function(err, user) {
	  res.json(user);
	});
});

app.use('/users', users);
app.listen(3000);




