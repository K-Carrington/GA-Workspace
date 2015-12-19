//angular.module('carsApp', ['ngAnimate', 'app.routes', 'mainCtrl', 'userCtrl', 
//	'userService', 'authService', 'main'])
angular.module('carsApp', ['ngAnimate', 'app.routes', 'authService', 'mainCtrl', 'userCtrl', 'userService', 'carsCtrl', 'cars', 'carsFactory'])

  // application configuration to integrate token into requests
  .config(function($httpProvider) {

	  // attach our auth interceptor to the http requests interceptors method
    $httpProvider.interceptors.push('AuthInterceptor');

});