function reverse_string(data) {
    data = data.split("");
    for(var i = 0; i < data.length/2; i++) {
        var temp =  data[i];
        data[i] = data[data.length-1 - i];
        data[data.length-1 - i] = temp;
    }
    data = data.join("");
    return data;
}
console.log(reverse_string("abcd"));

function better_reverse_string(data) {
    return data.split("").reverse().join("");
}
console.log(better_reverse_string("abcd"));

function find_longest_str(arr) {
    var max_str = "";
    for (var i = 0; i < arr.length; i++) {
        if (max_str.length < arr[i].length) {
            max_str = arr[i];
        }
    }
    return max_str;
}
var myarr = ['a', 'bb', 'cccccc', 'ddd', 'ee'];
console.log(find_longest_str(myarr));
var myarr = ['a', 'bb', 'cccccc', 'ddd', 'ee', 'ffffffffffffffffffff'];
console.log(find_longest_str(myarr));


function filterByLength(arr, x) {
  var rtn_arr = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i].length >= x) {
      rtn_arr.push(arr[i]);      
    }
  }
  return rtn_arr;
}

var r = ['a','b','ab','abc','d'];
console.log(filterByLength(r, 2));



