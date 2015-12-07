angular.module('BooksApp', []);

angular.module('BooksApp')
	.controller('BooksController', BooksControllerFunc)
	.$inject = ['$http']

function BooksControllerFunc($http){
	console.log('BooksController instance created')

	var self = this;
	self.allBooks = [];
	self.book = {}

	self.getBooks = function(){
	  $http({
      method: 'GET',
      url: '/books'
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      self.allBooks = response.data;
      console.log("self.allBooks:")
      console.log(self.allBooks)
      }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(response)
    });
  } 

  self.getBookDetails = function(book){
  	console.log("book:");
  	console.log(book);
  	self.book = book
  /*	$http({
      method: 'GET',
      url: '/book'
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      self.book = response.data;
      console.log("self.allBooks:")
      console.log(self.allBooks)
      }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(response)
    }); */
    
  }

  self.deleteAllBooks = function() {
    $http({
    	method: 'DELETE',
    	url: 'books/delete_all'
    }).then(function successCallback(response) {
      }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(response)
    });
  }
}

