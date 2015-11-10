var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
 if (err) {
  	console.log(err.stack);
  	console.log("Usage: file_reader.js filenamepath");
  	throw err;
  	//return;
  }
  //console.log(data);
  var str = data.toString().toUpperCase();
  console.log(str);
  var strngs = str.split('\n');
  console.log("num new lines = " + Number(strngs.length - 1)); 
});

console.log("Is this first? Yes because above read is async");

var data = fs.readFileSync(process.argv[2]);
var str = data.toString().toUpperCase();
console.log("Sync: " + str);