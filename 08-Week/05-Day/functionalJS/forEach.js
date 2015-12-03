//only takes collections of arrays and strings
function forEach(coll, fn) {
  for (var i=0; i < coll.length; i++) {
	fn(coll[i]);
  }
}

function printCap(str) {
  console.log(str.toUpperCase());
}

forEach(['phil', 'jimmy', 'kate'], printCap);

function printDouble(n) {
  console.log(n += n);
}

forEach([2, 5, 15], printDouble);

forEach('Hola mundo', function(letter){
	console.log('*'+letter+'*');
})