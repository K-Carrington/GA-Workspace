function giveMeLove(){return 'love'}
var allWeNeedIs = giveMeLove();

function honest(){return {type:'phone', branch:'apple', model:'iphone'}}
var hisPhone = honest();

function paellaRecipeMaker(){
	console.log("let\'s make paella");
	return function(){console.log('here\'s some paella')}
}
var paella = paellaRecipeMaker();

function recipeMaker(meal){
	console.log("let\'s make " + meal);
	return function(){console.log('here\'s some ' + meal)}
}
var lunch = recipeMaker('udon');
var dinner = recipeMaker('okonomiyaki');
//OR
recipeMaker('udon')() // to have lunch in one line

//**And see closure.html's <script>

function sayHello(name) {
  // your code here << "a function that returns a function which remembers data from 
  // it's containing(aka outer) function" is a closure >>
  console.log("Hello " + name);
  return function() {
    console.log("See ya later " + name);
  };

}
// Setup functions:
//var power2 = makePower(2);
//var power3 = makePower(3);

//  assert.strictEqual(power2(4), 16);
var newFun = sayHello("Yoko");
newFun();



