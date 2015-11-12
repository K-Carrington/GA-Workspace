var User = require('../models/user.js')

//Function to return all users
function index(req, res) {
  User.find({}, function(err, users) {
    if (err) throw err
    //console.log(users)
    res.json(users)
    //return users
  });
}

module.exports = {
	getAllUsers: index
}

/*
User.save(function(err) {
	if (err) console.log("There was an error: " + err);
	else console.log("user created");
});



User.update({email: "andy3@kim.com"}, {$set: {last_name: "tony"}}, function(err, user){
  if (err) throw err;
  console.log(user);
});

User.remove({email: "andy4@kim.com" }, function(err, user) {
  if (err) throw err;
  console.log(user);
  console.log('User successfully deleted!');
});

*/
