var http = require('http');

var fs = require('fs');

//read file
fs.readFile(process.argv[2], function(err, data) {
 if (err) {
  	console.log(err.stack);
  	console.log("Usage: wails.js htmpfilenamepath 2ndfile...");
  	throw err;
  	//return;
  }
  //var str = data.toString().toUpperCase();
  //console.log(str);
  //var strngs = str.split('\n');
  //console.log("num new lines = " + Number(strngs.length - 1)); 

  var data2 = fs.readFileSync(process.argv[3]);
  var data3 = fs.readFileSync('index.html');

  //send text to client
  var myServer = http.createServer(function(request, response){  //or: req, res
  	//log whe request comes
    console.log('somebody made a request at ' + request.url);
    if (request.url === '/guac') {
      response.write(data);
    }
    else if (request.url === '/calc') {
      response.write(data2);
    }
    else {
      response.write(data3);
    }

    //response.end('\ndone');
    response.end();
  });

  myServer.listen(1337); // starts server on port 1337
  
});







