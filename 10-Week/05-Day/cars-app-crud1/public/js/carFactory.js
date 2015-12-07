(function() {
  angular.module('carsApp')
    .factory('cars', cars)

    cars.$inject = ['$http'] //quotes keep it from getting minified

  function cars($http) {
    var carsUrl = '/api/cars'
    var cars = {}

    cars.list = function() {
    	return $http.get(carsUrl)
    }

    cars.show = function(carId) {
    	return $http.get(carsUrl + '/' + carId)
    }

    cars.editCar = function(carId) {
    	return $http.get(carsUrl + '/' + carId + '/edit', data)
    }

    cars.updateCar = function(carId, data) {
    	return $http.put(carsUrl + '/' + carId + '/edit', data)
    }

    cars.deleteCar = function(carId) {
    	return $http.delete(carsUrl + '/' + carId)
    }

//TBD    cars.deleteAll    (+ "/destroy-all")

    cars.addCar = function(data){
      return $http.post(carsUrl, data)
    }

    return cars
  }
}())