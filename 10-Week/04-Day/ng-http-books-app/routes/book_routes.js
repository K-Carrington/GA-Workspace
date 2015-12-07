var booksController = require('../controllers/books_controller.js'),
	express			= require('express'),
	bookRoutes		= express.Router() 

//create routes for /books
bookRoutes.route('/')
	.get(booksController.index)

bookRoutes.route('/delete_all')
  .delete(booksController.destroy_all)

module.exports = bookRoutes