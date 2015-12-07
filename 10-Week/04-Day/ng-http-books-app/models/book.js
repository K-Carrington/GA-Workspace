var mongoose = require('mongoose')

//create book schema
var bookSchema = new mongoose.Schema({
	title: String,
	year: Number
})

//creates a method to display book's info
bookSchema.methods.info = function() {
	console.log('My title is: ' + this.title + '. I was published in ' + this.year)
}

//sets variable for schema
var Book = mongoose.model('book', bookSchema)

//exports module
module.exports = Book