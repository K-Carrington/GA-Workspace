var express = require('express') //already uses(requires) http package
var app = express()
var apiRoutes = require('./routes/api.js')
var giphyRoutes = require('./routes/giphy.js')

app.get('/', function(req, res){
  res.json({message: "Welcome to my app!"})
})

app.use('/api', apiRoutes)
app.use('/giphy', giphyRoutes)

app.listen(3000, function(){
	console.log("Server running. Magic will happen. Sparks will fly.")
})

