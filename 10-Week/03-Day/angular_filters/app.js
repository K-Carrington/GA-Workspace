//An iife hides the scope (creates a sort of namespace)
(function() {
	'use strict'; //use ECMA6
	angular.module('candyApp', [])
  angular.module('candyApp')
    .controller('candyController', candyController)
    .filter('checkmark', checkmarkFilter) //Create our own filter named checkmark
    .directive('navBar', navBar)

  candyController.$inject = ['$scope']

  function navBar() { //make a custom directive
  	var directive = {
  		restrict: 'EA', //E for element, A for attribute
  		templateUrl: 'templates/nav.html'
  	}
  	return directive;
  }

  function checkmarkFilter(){
    return function(input){
    	return input ? '\u2713' : '\u2718' //return check or x
    }
  }

  function candyController($scope){
  	var candyCtrl = this;
  	candyCtrl.name = "Candy!"
  	candyCtrl.candies = [
  	  {name: 'Snickers', color: 'Brown', fruity: false, price: 1.5}, 
  	  {name: 'Fruit Roll Ups', color: 'Red', fruity: true, price: 3}, 
  	  {name: 'White Chocolate Hershey Bars', color: 'White', fruity: false, price: .85}, 
  	  {name: 'Lime Jelly Beans', color: 'Green', fruity: true, price: .05}, 
  	  {name: 'Red Hots', color: 'Red', fruity: false, price: 1.25}, 
  	  {name: 'Whoppers', color: 'Brown', fruity: false, price: 1.75}
  	];
  }
}())
