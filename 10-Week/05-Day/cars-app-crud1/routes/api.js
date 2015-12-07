var
	express = require('express'),
	apiRouter = express.Router()
	mongoose = require('mongoose'),
	Car = require('../models/Car.js')

apiRouter.get('/', function(req,res){
	res.json({message: "Api routes are working."})
})

apiRouter.route('/cars')
	.get(function(req,res){ //index all cars
		Car.find({}, function(err, cars){
			res.json(cars)	
		})
	})
	.post(function(req,res){ //create a car
		var newCar = new Car
		newCar.make = req.body.make
		newCar.model = req.body.model
		newCar.year = req.body.year
		newCar.save(function(err, car){
			if(err) throw err
			res.json({message: "Car Saved!", car: car})
		})
	})

apiRouter.get('/destroy-all', function(req,res){
	Car.remove({}, function(err){
		if(err) throw err
		res.json({message: 'All cars destroyed! Booooom!'})
	})

apiRouter.route('/cars/:id')
	.get(function(req,res){ 
		Car.findById(req.params.id, function(err,car){
			if(err) throw err
			res.json(car)
		})
	})

//TBD get, put & delete
apiRouter.route('/cars/:id')
  .get(function(req,res){ 
	  console.log("in edit get api.js")
	  Car.findById(req.params.id, function(err,car){
	  	if(err) throw err
	  	res.json(car)
	  })
  })
  .put(function(req,res){ //update a car
		var newCar = new Car
		findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err,....))
		console.log('In update put api.js')
		//newCar.make = req.body.make
		//newCar.model = req.body.model
		//newCar.year = req.body.year
		//newCar.save(function(err, car){
			if(err) throw err
			res.json({message: "Car Edited!", car: car})
		})
	.delete(function(req,res){ //delete a car
		console.log('In delete api.js')
	})

apiRouter.route('/cars/:id/delete')
	.get(function(req,res){ 
		console.log("in delete get api.js")
		Car.findById(req.params.id, function(err,car){
			if(err) throw err
			res.json(car)
		})
	})
	

    Car.findByIdAndRemove(req.car._id, function(err){
      if(err) res.send(err);
      console.log("Car deleted!");
    })
	})


})

module.exports = apiRouter