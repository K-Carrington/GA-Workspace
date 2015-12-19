angular.module('starter.controllers', [])
.factory('pokeFactory', PokeFactory)


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, pokeFactory) {
  $scope.playlists = [];
  $scope.api = pokeFactory

  //pokeCtrl.appPokemon = [];
    //pokeCtrl.pman = {}
   // pokeCtrl.img = {}

    $scope.api.getAllPokemon()
      .success(function(data) {
        //console.log("Getting all pokemon:", data.pokemon)
        $scope.playlists = data.pokemon;
        console.log("allPokemon = ", $scope.playlists);
      })
/*
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

    } */
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

PokeFactory.$inject = ['$http']

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


