
//****This requires a server*****

//An iife hides the scope (creates a sort of namespace)
(function() {
	'use strict'; //use ECMA6
	angular.module('candyApp', [])
  angular.module('candyApp')
    .controller('candyController', candyController)
    .filter('checkmark', checkmarkFilter) //Create our own filter named checkmark
    .directive('navBar', navBar)    // Create our own custom directive too
    .directive('footerBar', footerBar)
    .directive('headingArea', headingArea)
    .directive('infoArea', infoArea)

  candyController.$inject = ['$scope']

  function navBar() { //make a custom directive
  	var directive = {
  		restrict: 'EA', //E for element, A for attribute, C would be for class
 /* restrict: allows us to restrict use of the directive to only certain types of HTML namers:
'E', or element, allows us to use the directive as the actual HTML element: <my-nav></my-nav>
'A', or attribute, allows us to use the directive as an attribute of another element: <div my-nav></div>
'C', or class, let's us assign a class to an element that matches the directive name: <div class="my-nav"></div>
 */
  		templateUrl: 'templates/nav.html',
  		transclude: true // put ng-transclude tag in nav.html and then display text in index.html
  	}
  	return directive;
  }

  function headingArea() { //make a custom directive
  	var directive = {
  		restrict: 'EA', //E for element, A for attribute, C would be for class

  		templateUrl: 'templates/heading.html',
  		transclude: true // put ng-transclude tag in nav.html and then display text in index.html
  	}
  	return directive;
  }

  function infoArea() { //make a custom directive
  	var directive = {
  		restrict: 'EA', //E for element, A for attribute, C would be for class

  		templateUrl: 'templates/info.html',
  		transclude: true // put ng-transclude tag in nav.html and then display text in index.html
  	}
  	return directive;
  }

  function footerBar() {
  	var directive = {
  		restrict: 'EA',
  		templateUrl: 'templates/footer.html'
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
  	  {name: 'Whoppers', color: 'Brown', fruity: false, price: 1.75},
  	  {name: 'M&Ms', color: 'Various', fruity: false, price: 1.75},
  	  {name: '3 Musketeers', color: 'Brown', fruity: false, price: 1.75}
  	];
  }
}())
