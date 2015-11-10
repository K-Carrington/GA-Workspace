
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
    else if (req.url === '/reddit') {
      var options = {
        host: 'www.reddit.com',
        path: '/r/movies.json'
      }
      http.request(options, function(res){
        var str = '';
        res.on('data', function(chunk) {
          str += chunk;
        });
        res.on('end', function(){
          console.log(str);
        })
      }).end();

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
});

//***Now try to get JSON data from http://reddit.com/movies.json 
//(see above else if for Philippe's answer - the idea is to have one server
  // get data from another server)

//this just gets the html whether argv has .json or not
/*
http.get(process.argv[2], function(response) {
  console.log("Got response: " + response.statusCode);
  response.on("data", function(data) {
    console.log("data = " + data); //prints out html for whole site
  });
}).on('error', function(err) {
  console.log("Got error: " + err.message);
});
*/



/* Or can try using a 3rd party npm:
request = require('request-json');
var client = request.createClient('http://localhost:8888/');
 
var data = {
  title: 'my title',
  content: 'my content'
};
client.post('posts/', data, function(err, res, body) {
  return console.log(res.statusCode);
});
 
client.get('posts/', function(err, res, body) {
  return console.log(body.rows[0].title);
});
 
data = {
  title: 'my new title'
};
client.put('posts/123/', data, function(err, res, body) {
  return console.log(response.statusCode);
});
 
client.del('posts/123/', function(err, res, body) {
  return console.log(response.statusCode);
});
 
data = {
  title: 'my patched title'
};
client.patch('posts/123/', data, function(err, res, body) {
  return console.log(response.statusCode);
});
*/