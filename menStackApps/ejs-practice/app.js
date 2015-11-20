var 
  express = require('express'),
  app =  express(),
  ejs = require('ejs'),
  ejsLayouts = require('express-ejs-layouts');


// app config
app.set('view engine', 'ejs');


// middleware, intercepts requests to run these first
app.use(ejsLayouts);
app.use('/assets', express.static(__dirname + '/assets')); 
//1st arg could be public or static dir name...
//2nd arg is __dirname from root of this app
app.use(function(next) {
  console.log("A request has been made!!");
  next();
});


//basic routes
app.get('/', function(req,res){
	var collection = [
	  {name: "Lilly", email: "notjuan@gmail.com"},
	  {name: "Lilly2", email: "notjuan2@gmail.com"},
	  {name: "Lilly3", email: "notjuan3@gmail.com"}
	]; //db simulaiton
	
	var data = {
		title: "The Home Page",
		message: "",
		users: collection
	}

	//response
	//res.json({message: "It works"});
	//res.render('index', {title: "The Home Page"}); 
	res.render('index', data); 
	//automatically look for views/<specified file, eg index...>
	//and sets variable(s) to put into html
});

app.get('/contact', function(req,res){
	
	var data = {
		title: "Contact Page",
		message: "1234567"
	}
	res.render('contact', data); 
});
app.get('/about', function(req,res){
	
	var data = {
		title: "about Page",
		message: "........"
	}
	res.render('about', data); 
});
app.get('/faq', function(req,res){
	res.render('faq', {title: "FAQ"})
});

app.listen(3000, function(){console.log('Server running on 3000')});

