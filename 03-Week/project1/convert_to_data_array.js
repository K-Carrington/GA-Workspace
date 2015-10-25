//Node.js to convert data

var fs = require("fs");

console.log("Usage node load_flash_card.data.js raw_data_file target_file variable_name");
// read 2nd arg to node command
var data = fs.readFileSync(process.argv[2]);
data = data.toString();
//console.log("Synchronous read: " + data.toString());

var rcard = data.split('\n');
console.log("rcard[0] = " + rcard[0]);

//write to file specified by 3rd arg to node command
fs.writeFileSync(process.argv[3], process.argv[4]);

for (var i = 0; i < rcard.length; i++) {
  var recs = rcard[i].split(' ');
  //console.log("recs[0] = " + recs[0]);
  fs.appendFileSync(process.argv[3], '[' + i + '] = ["');
  fs.appendFileSync(process.argv[3], recs[0] + '", "');
  for (var j = 1; j < recs.length - 1; j++) {
  	fs.appendFileSync(process.argv[3], recs[j] + ' ');
  }
  fs.appendFileSync(process.argv[3], '"];\n');
  fs.appendFileSync(process.argv[3], process.argv[4]);
}




