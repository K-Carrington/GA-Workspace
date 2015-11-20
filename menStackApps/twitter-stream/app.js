var express = require ('express'),
  app       = express(),
  port      = process.env.PORT || 3000, //3000 as default port
  fs        = require ('fs'),
  logger    = require ('morgan'),
  router    = express.Router(),
  users_router     = require('./users.js'), // include my other file
  products_router  = require('./products.js')


var accessLogStream = fs.createWriteStream(__dirname + '/access.log',
      {flags: 'a'})
app.use(logger('combined', {stream: accessLogStream}))

router.get('/', function(req, res) { //This is an alt to below app.get,
	                     // more common way to create routes in express
	res.send('this is the home page')
})

//app.get('/', function(req, res) {
	
//})

//app.get('/:id', function(req, res) {
//  res.json({id: req.params.id})
//})

////var users = [{name: "tony"}, {name: "ken"}, {name: "juan"}]
//app.get('/:id', function(req, res) {
//  //res.json({id: req.params.id})
//  var users = [{user: 1}, {user: 2}, {user: 3}]
//  if (req.params.id < users.length) {
//  	res.json(users[req.params.id - 1])
//  }
//  else {
//    res.json({"message": "user does not exist"})
//  }
//})

//app.use('/', router)
app.use('/', users_router)
app.use('/products', products_router)
app.listen(port)
console.log('Server started on ' + port)