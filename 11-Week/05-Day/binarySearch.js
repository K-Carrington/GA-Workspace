//return index of elem in collection, else return -1
// a loop is better than recursion
function binSearch(col, elem, idx) {
	var mid = Math.floor(col.length / 2);
	if (idx === undefined) {
		console.log("setting idx")
		idx = mid;
	}
	if (col[mid] === elem) {
		console.log("returning " + idx)
    return idx;
	}
	else if (Math.floor(col.length) === 1)
	{
		return -1;
	}
	else if (col[mid] > elem) {
		idx = idx - Math.ceil(mid/2)
		binSearch(col.splice(0, mid), elem, idx)
	}
	else if (col[mid] < elem) {
		idx = idx + Math.floor(mid/2)+1
    binSearch(col.splice(mid+1, mid), elem, idx)
	}
  else {
  	return -1;
  }
}

var arr = ['alex', 'andy', 'eunice', "fff", 'ken', 'mmm', 'zzz' ];
var index = binSearch(arr, 'eunice') 
