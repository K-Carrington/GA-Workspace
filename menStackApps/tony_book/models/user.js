var mongoose = require('mongoose');

//create a user schema
var userSchema = new mongoose.Schema({
	user_name: String
	, email: {type: String, required: true, unique: true}
	, friends: []
	, age: Number
});
userSchema.methods.info = function(){
	console.log('My user name is ' + this.user_name + ', I am ' + this.age);
}

//User is a collection in the db
var User = mongoose.model('User', userSchema);

//Make this model accesible to the controller
//Instantiate it for this file 
module.exports = User; //this is the above collection in the db