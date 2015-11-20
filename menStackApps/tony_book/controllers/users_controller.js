var User = require('../models/user.js')

//Function to show all users
function index(req, res) {
  User.find({}, function(err, users) {
    if (err) throw err
    //console.log(users)
    res.json(users)
    //return users
  });
}

function create(req, res) {
  // make a single user -- create
  console.log('Creating a user')
  var user = new User()
  user.user_name = req.body.user_name //body-parser makes body available
  user.email = req.body.email
  user.save(function(err){
    if(err){
      if(err.code == 11000){
        return res.json({success: false, message: 'email already exists' })
      } else {
        res.send(err)
      }
    }
    res.json({success: true, message: 'User created, Wahey!'})
  })
}

//Show 1 user via email
function showe(req, res) {
  User.find({email: req.params.email}, function(err, user) {
    if (err) throw err
    //console.log(users)
    res.json(user)
    //return users
  });
} 

//Show 1 user via id
function show(req, res){
  User.findById(req.params.user_id, function(err, user){
    if(err) res.send(err)
    res.json(user)
  })
}

//Update a user
function update(req, res){
  User.findById(req.params.user_id, function(err, user){
    if(err) res.send(err)
 
    if(req.body.username) user.user_name = req.body.username
    if(req.body.email) user.email = req.body.email

    user.save(function(err){
      if(err) res.send(err)
      res.json({success: true, message: "you have been updated!"})
    })
  })
}

//Delete a user
function destroy(req, res){
  //User.remove({_id: req.params.user_id}, function(err, user){
  User.findOneAndRemove({_id: req.params.user_id}, function(err, user){
    if(err) res.send(err)
    res.json({success: true, message: "User: " + user.user_name + "deleted"})
  })
}



module.exports = {
	getAllUsers: index
  , createUser: create	
  
  , showUser: show
  , showUsere: showe
  , updateUser: update
  , destroyUser: destroy
}

/*

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
