//iife
(function(){
  angular.module('carsApp')
    .controller('carsController', carsController)
    .controller('carDetailController', carDetailController)

    //**Need to inject else it wont work after minifying
    // both controllers will use our 'cars' factory, so we'll inject it in both accordingly
    carsController.$inject = ['cars', '$window', '$timeout']
    carDetailController.$inject = ['cars','$routeParams','$location']
    //...

    //controller functions:
    function carsController(cars, $window, $timeout) {
    	var self = this
    	self.name = 'Car Controller'
    	self.api = cars  //car factory
    	self.cars = []
      self.newCar = {}

    	self.api.list().success(function(response){
    		console.log(response)
    		self.cars = response
    	})

    	self.addCar = function(make, model, year) {
        var data = {make: make, model: model, year: year}
        //perform post request, then do a promise to run success function if it exists
        self.api.addCar(data).then(function success(response){
          console.log(response)
          self.cars.push(response.data.car)
          self.newCar = {}
          //$timeout(function(){
            $window.document.querySelectAll('#new-car-form input')[0].focus())
          //}) //set timer (1 tick default) to delay and let things catch up, not neede but just for show here
        }) 
    	}

      //Add other multi car controller functions here
      self.deleteAllCars = function() {
        self.api.deleteAllCars()
          .success(function(response) {
            console.log(response)
            self.allCars = []
          }) 
      }
    }

    function carDetailController(cars, $routeParams) {
      var self = this
      self.name = 'Car Detail'
      self.api = cars; //car factory
      self.car = null

      // default boolean value, which we can toggle true/false for showing/hiding car edit form
      self.editing = false

      self.showCar = function(carId){
      	self.api.show(carId).success(function(response) {
      		self.car = response
      	})
      }
      self.showCar($routeParams.carId)

      self.updateCar = function(carId, make, model, year){
        var data = {make: make, model: model, year: year}
    		//perform post request, then do a promise to run success function if it exists
        self.api.updateCar(carId, data).success(function(response){
          console.log(response)
          self.car = response
          self.editing = false
    		})
    	}

    	self.deleteCar = function(carId) {
    		console.log('in controller deleteCar')

    		//perform post request, then do a promise to run success function if it exists
        self.api.deleteCar(carId).success(function(response){
          console.log(response)
          $location.path('/cars')  //redirect to list of cars
    		})
    	}

    }
}());


