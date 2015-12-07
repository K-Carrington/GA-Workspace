var Book = require('../models/book.js')

//create action to display all books
function index(req, res) {
	Book.find({})
		//.limit(10)
        .select('name')
		.exec(function(err, result){
			res.json(result)
		})
}

//create action to add a new book
function create(req, res) {

	//put your code here

}

//create action to show a single book
function show(req, res) {
	
	//put your code here
	//Book.findById(req.body.id, function(){})

}

//create action to edit a single book
function update(req, res) {

	//put your code here

}

//create action to delete a single book
function destroy(req, res) {

	//put your code here
	
}

//create action to delete all books
function destroy_all(req, res) {
  console.log("deleting all books...")
  Book.remove({}, function(err, result){
  	if (err) throw err;
  	res.json({message: 'all books have been removed'});
  })
	//put your code here
	
}

module.exports = {
	index: index,
	show: show,
	destroy_all: destroy_all
}