var http = require('http');

var myServer = http.createServer(function(request, response){  //or: req, res
  console.log('somebody made a request at ' + request.url);
  response.write('hello there ' + request.url)
  response.end('\ndone');
});

myServer.listen(1337); // starts server on port 1337
// Then test by typing localhost:1337 into a browser


/*
http.get(process.argv[2], function(response) {
  var concatStream = require('concat-stream')
  console.log("Got response: " + response.statusCode);
  response.pipe(concatStream(function (data) { 
    var str = data.toString();
    console.log("website whole stream data length = " + str.length);
    //console.log(str);
  }));
  response.on("data", function(data) {
    console.log("1 chunk of website data length = " + data.length); 
  });
}).on('error', function(err) {
  console.log("Got error: ",  err);
});
*/