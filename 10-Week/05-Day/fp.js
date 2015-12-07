function forEach(coll, fn) {
	for (var i=0; i<coll.length; i++) {
		fn(coll[i]);
	}
}

myArr = [3,6,9];
word = 'magnificent';
forEach(myArr, function(el) {
	console.log(el + ' is a multiple of 3');
	console.log('the double of ' + el + ' is ' + el*2);
})
forEach(word, function(el){
	process.stdout.write(el.toUpperCase());
})
process.stdout.write('\n');

//////////////
function map(coll, fn) {
	var tmp = [];
  for (var i = 0; i<coll.length; i++) {
  	tmp[i] = fn(coll[i])
  }
	return tmp;
}

myNums = [1,2,3,4,5];
var transformed = map(myNums, function(el) {
	return el*5;
});
console.log(transformed);

people = [
  {name: 'Colin', shoeSize: 10},
  {name: 'Kristin', shoeSize: 11},
  {name: 'Ginny', shoeSize: 7}
  ];
var sizes = map(people, function(el) {
	return el.shoeSize;
});
console.log("sizes = " + sizes)
var comparefn = function(a, b) {
  return a - b;
};
var ichiban_chich_size = (map(people, function(el){return el.shoeSize}).sort(comparefn))[0] //smallest shoe size
console.log("smallest shoe size: " + ichiban_chich_size)






