//
//Reverse with loop
//
var orig = ['a','l','i','e','n']
var orig_len = orig.length
var reversed = []
for (var i = 0; i < orig_len; i++) {
  reversed.push(orig.pop())
}
console.log(reversed)

//
//Reverse with recurssion
//  arrays are passed by value, so using an
//  object which is passed by reference
//
function rev(obj, idx_s, idx_e) {
  if (idx_s >= idx_e) return obj;
  
  temp = obj.arr[idx_e]
  obj.arr[idx_e] = obj.arr[idx_s]
  obj.arr[idx_s] = obj.arr[idx_e]

  rev(obj, idx_s+1, idx_e-1)
  return obj
}

var orig2 = {arr: ['a','l','i','e','n']}
var reversed2 = {arr: []}
reversed2 = rev(orig2, 0, orig2.arr.length-1)
console.log(reversed)

//
//And without reference/pointer either
//
function rev2(arr) {
  if (arr.length < 2) {
    return arr
  }
  var half_idx = Math.ceil(arr.length / 2);
  return rev2(arr.slice(half_idx)) 
    .concat(rev2(arr.slice(0, half_idx)))
}
orig = ['a','l','i','e','n']
reversed = []
reversed = rev2(orig)
console.log(reversed)






function factorial(n) {
  var result = 1; //base case to stop computation
  if (n === 1){return 1}
  return n * factorial(n-1);

  return result;
}




