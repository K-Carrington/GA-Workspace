//iife
(function(){
  angular.module('carsApp', ['ngRoute'])
	.directive('carForm', carForm)


function carForm(){
	var directive = {
		restrict: 'E',
		templateUrl: '/partials/car-edit.html'
	}
	return directive
}

}());
