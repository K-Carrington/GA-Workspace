//iife
(function(){
  angular.module('carsApp')
    .controller('carsController', carsController)
    .controller('carDetailController', carDetailController)
    .controller('carEditController', carEditController)

    //**Need to inject else it wont work after minifying
    carDetailController.$inject() = ['cars', '$routeParams']
    //...

    //controller functions:
    function carsController(cars, $window, ){
    	var self = this
    	self.name = 'Car Controller'
    	self.api = cars  //car factory
    	self.cars = []

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
          $timeout(function(){
            $window.document.querySelectAll('#new-car-form input')[0].focus())
          }) //set timer (1 tick default) to delay and let things catch up, not neede but just for show here
        }) 
    	}

      //Add other multi car controller functions here
      self.deleteAllCars = function() {
        self.api.deleteAllCars()
          .then(function success(response) {
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
      self.showCar = function(carId){
      	self.api.show(carId).success(function(response) {
      		self.car = response
      	})
      }
      self.showCar($routeParams.carId)
    }

    //change this to (single) car controler
    function carEditController(cars, $routeParams) {
    	var self = this
    	self.name = 'Car Edit'
    	self.api = cars; //car factory
    	self.car = null
    	self.editCar = function(carId) {
    		console.log('in controller editCar')
    		self.api.editCar(carId).success(function(response) {
    			self.car = response
    		})
    	}
    	self.editCar($routeParams.carId)

    	self.updateCar = function(carId, make, model, year) {
        var data = {}
        if (make) {
          data.make = make
        }
        if (model) {
          data.model = model
        }
        if (year) {
          data.year = year
        }
    		console.log('in controller updateCar')

    		//perform post request, then do a promise to run success function if it exists
        self.api.updateCar(carId, data).then(function success(response){
          console.log(response)
          self.car = response
          self.editing = false

          //TBD probably need to replace data record
          //self.cars.push(response.data.car)
    		})
    	}
    	//self.updateCar($routeParams.carId)
    }

    function carDeleteController(cars, $routeParams) {
    	var self = this
    	self.name = 'Car Delete'
    	self.api = cars; //car factory
    	self.car = null

    	self.deleteCar = function(carId) {
    		console.log('in controller deleteCar')

    		//perform post request, then do a promise to run success function if it exists
        self.api.deleteCar(carId, data).then(function success(response){
          console.log(response)
          $location.path('/cars')  //redirect to list of cars
    		})
    	}
    	//self.deleteCar($routeParams.carId)
    }
}())


