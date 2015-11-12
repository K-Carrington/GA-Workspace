var express = require('express');
var app = express();

//Specify which directory to serve to the client
app.use(express.static('public'));

app.listen(1337);
//listens for .../any .html or .jpg, etc. file typed into the url 
//and displays it from the public folder