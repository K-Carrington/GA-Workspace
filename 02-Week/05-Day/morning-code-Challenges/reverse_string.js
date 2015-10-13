/* function myReverse (str) {
	var arr = str.split('');
	for (var i=0; i<arr.length/2; i++) {
		var temp = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = temp;
	}
	return arr.join('');
}

console.log(myReverse("String"));
console.log(myReverse("abcde"));*/

//prototype adds a property(a key/value pair - in this case a key:function) to the object
String.prototype.myReverse = function () {
	var arr = this.split('');
	for (var i=0; i<arr.length/2; i++) {
		var temp = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = temp;
	}
	return arr.join('');
}

console.log("String".myReverse());
console.log("abcde".myReverse());