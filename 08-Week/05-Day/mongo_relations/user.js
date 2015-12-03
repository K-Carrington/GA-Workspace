var mongoose = require('mongoose')
	,User = mongoose.model('User', {
		username: {type: String, required: true }
		,password: {type: String, required: true}
		,posts: [Post]
		,friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
	})
	.Post = mongoose.Schema({
		body: String
	})

User.pre('save', function(){
	console.log('saving user')

})
module.exports = User