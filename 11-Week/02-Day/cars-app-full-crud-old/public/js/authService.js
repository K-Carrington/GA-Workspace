(function() { //**This factory is like class definitions
	'use strict'
	// Create angular module for auth service
	angular.module('authService', [])

	// create a function to export service
	.factory('Auth', Auth)
	.factory('AuthToken', AuthToken)
	.factory('AuthInterceptor', AuthInterceptor)


  function Auth($http, $q, AuthToken) { //q handles promises, 3rd param injects a factory into anther factory
  //	$http.get('someurl')
  //	  .success                  //.success is the returned promise
    var authFactory = {}
    authFactory.login = function(username, password) {
    	return $http.post('/api/authenticate', {
    		username: username,
    		password: password
    	})
    	.success(function(data) {
    		AuthToken.setToken(data.token)
    	return data  //return entire user object
    	})
    }

    authFactory.logout = function() {
    	AuthToken.setToken()
    }

    authFactory.isLoggedIn = function() {
    	if (AuthToken.getToken()) return true
    	else return false
    }

    authFactory.getUser = function() {
    	if (AuthToken.getToken()) return $http.get('/api/me') //decodes token
      else return $q.reject({message: 'User has no token'})
    }

    return authFactory;
  }//end Auth()

  //makes sure that there is a token attached to every request
  function AuthInterceptor($q, AuthToken) {
  	var authIntercept = {}

    authIntercept.request = function(config) {
    	var token = AuthToken.getToken()
    	if (token) 
    		config.headers['x-access-token'] = token

    	return config
    }
    authIntercept.responseError = function(response) {
    	if (response.status = 403) $location.path('/login')

    	return $q.reject(response)
    }

  	return authIntercept
  }//end AuthInterceptor()

  //main factory
	function AuthToken($window) {
		var authTokenFactory = {}

		//get the token out of local storage
    authTokenFactory.getToken = function() {
    	//use angular version of window (not build in b/c of event loop)
    	return $window.localStorage.getItem('token')
    }
    authTokenFactory.setToken = function(token) {
    	if (token) $window.localStorage.setItem('token', token)
    	else $window.localStorage.removeItem('token')
    }

	  return authTokenFactory
	}
}());



