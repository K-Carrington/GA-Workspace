//
(function(){
  angular.module('carsApp')
    .config(['$routeProvider', carRoutes])

  function carRoutes($routeProvider){
  	$routeProvider
  	  .when('/cars', {
  	  	templateUrl: 'partials/car-list.html',
  	  	controller: 'carsController',
  	  	controllerAs: 'carsCtrl'
  	  })
      .when('/cars/:carId', { // : is a wild card in all lang's route files
        templateUrl: 'partials/car-detail.html',
        controller: 'carDetailController',
        controllerAs: 'carDetailCtrl'
      })
      .when('/cars/:carId/edit', {
        templateUrl: 'partials/car-edit.html',
        controller: 'carEditController',
        controllerAs: 'carEditCtrl'
      })
     // .when('/cars/:carId/update', {  DON'T NEED THESE
     //   templateUrl: 'partials/car-list.html',
     //   controller: 'carsController',
     //   controllerAs: 'carsCtrl'
     // })
     // .when('/cars/:carId/delete', {
     //   templateUrl: 'partials/car-list.html',
     //   controller: 'carDeleteController',
     //   controllerAs: 'carDeleteCtrl'
     // })
  	  .otherwise({ //redirect (render SPA view) to /cars for all other routes
  	  	redirectTo: '/cars'
  	  })
  }
}())