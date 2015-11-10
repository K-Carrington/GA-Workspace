var fs = require('fs');

//non-append (overwrite)
fs.writeFile(process.argv[2], 'hello there', function(err) {
	if (err) throw err;
	console.log("it worked!");
});

console.log("Am I run first?")