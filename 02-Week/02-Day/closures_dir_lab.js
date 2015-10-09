var count = 0;

function incr() {
	return ++count;
}

console.log(incr());

function makeIncr(i){
	return function() {
		return ++i;
	}
}

countIncr = makeIncr(count);
console.log(countIncr());
console.log(countIncr());
console.log(countIncr());

var j = 0;
jIncr = makeIncr(j);
console.log(jIncr());
console.log(jIncr());
console.log(jIncr());




function setupTimeout(index) {
    setTimeout(function(){ //this function has a closure on index
        console.log('index: ' + index);
    }, 1000*index)
}
for (var i=0; i<10; i++) {
    setupTimeout(i);
}

for (var i = 0; i < 10; i++) {
    setTimeout((function(i) {
        return function() { 
            console.log(i); 
        }; 
    })(i), 1000*i);
}

(function(word){
    console.log(word);
})("hello")