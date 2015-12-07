//John Papa says use an iife
(function() {
	'use strict';
	angular.module('pokeApp',[])
	  .factory('pokeFactory', PokeFactory) //factory must be created before controller
	  .controller('pokeController', PokeController) //angular controller

  //dependency injection
  PokeFactory.$inject = ['$http']
  PokeController.$inject = ['pokeFactory']

  //create factory fun.
  function PokeFactory ($http) {
  	var pokedexURL = 'http://pokeapi.co/api/v1/pokedex/1'
  	var pokemonURL = 'http://pokeapi.co/'

  	var pokefactory = {}

  	pokefactory.getAllPokemon = function(){
  		return $http.get(pokedexURL)
  	}  

    pokefactory.getOnePokemon = function(id) {
    	console.log("in getOnePokemon factory fun, id = " + id)
    	return $http.get(pokemonURL + id)
    }
    // return the produced factory object
    return pokefactory	
  }

  //create conbtroller fun.
  function PokeController(pokeFactory) {
    var pokeCtrl = this
    pokeCtrl.title = 'POKEDEX 1'
    //attaching pokeFactory to the controller
    pokeCtrl.api = pokeFactory
    pokeCtrl.appPokemon = [];
    pokeCtrl.pman = {}
    pokeCtrl.img = {}

    pokeCtrl.api.getAllPokemon()
      .success(function(data) {
      	//console.log("Getting all pokemon:", data.pokemon)
      	pokeCtrl.allPokemon = data.pokemon;
      	console.log("allPokemon = ", pokeCtrl.allPokemon);
      })

    pokeCtrl.getOne = function(id) {
    	console.log("in getOne, id = " + id)
    	pokeCtrl.api.getOnePokemon(id)
      .success(function(data) {
      	console.log("Getting one pokemon:", data)
      	pokeCtrl.pman = data;
      })

      var tmp = id.split('/');
      tmp[2] = 'sprite'
      id = tmp.join('/')
      console.log('id = ' + id)
      pokeCtrl.api.getOnePokemon(id)
      .success(function(data) {
      	console.log("Getting one pokemon:", data)
      	pokeCtrl.img = data;
      })

    }
  }
}());



