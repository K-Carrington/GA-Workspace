
var http = require('http');
var fs = require('fs');
//console.log(http.METHODS);

var server = http.createServer(function(req, res){
    if(req.url === '/') {
      res.writeHead(200, {'Content-Type': 'text/html'}); 
                // html as opposed to plain text
                // 200 is ok status code
      res.end('<h1>Welcome to my Node App!</h1>');
    }
    else if (req.url === '/about') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<h1>About.......</h1>');
    }
    else if (req.url === '/contact') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<h1>Contact.......</h1>');
    }
    else {
   	  res.writeHead(404, {'Content-Type': 'text/html'});
      res.end('<h1>Page not found!</h1>');
    }

    //log when the request comes
  	var dateTime = new Date();
    dateString = dateTime.toUTCString();
    log_str = 'A ' + req.method + ' request was made to ' + req.url + ' at ' + dateString;
    console.log(log_str);
    fs.appendFile('access_logs.txt', log_str + '\n', function(err) {
	  if (err) throw err;
	  //console.log("it worked!");
    });

});

server.listen(8888, function(){
	console.log("Server is running on port 8888")
})





