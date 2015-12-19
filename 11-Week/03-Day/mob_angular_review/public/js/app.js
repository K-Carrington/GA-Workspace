(function() {
  'use strict';
  angular.module('zooApp', ['ngRoute'])
  angular.module('zooApp')
    .controller('zooController', zooController)
    .$inject = ['$http']


  function zooController() {
  	var self = this
  	self.name = 'animalStyle'
  	self.animals = [
  	  {name: 'Jimmy', type: 'tiger', visible: true}, 
  	  {name: 'Emma', type: 'Sea Otter', visible: true}, 
  	  {name: 'Andy', type: 'Gorilla', visible: false}, 
  	]
    self.changeVisibility = function(animal) {
      animal.visible = !animal.visible
    }
  
  	console.log(self.name)

  }
}());
