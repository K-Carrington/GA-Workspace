//user model
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;
var userSchema = new Schema({
	//if they created an account through our site:
	local: {
		name: String,
		email: String,
		password: String
    },
    //if they created an account through FB
    facebook: {  // this won't change, but FB JSON data format always does
    	id: String,
    	name: String,
    	token: String, //user has authorized use of their info
    	email: String
    }
});

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
}

var User = mongoose.model('User', userSchema);

module.exports = User