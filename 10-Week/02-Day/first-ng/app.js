(function() {
  'use strict';
  //using john papa style guide
  angular.module('myApp',[])

  //create an angularjs controller
  angular.module('myApp')
  .controller('myController',myController)
  .controller('secondController',secondController)
  myController.$inject = ['$scope']
  //myController function
  function myController($scope){
    var myCtrl = this
    myCtrl.name = "The John Papa Way!"
    $scope.$watch('myCtrl.name',function(newValue,oldValue){
      console.log("newValue:"+newValue + "/oldValue:" + oldValue)
    })
    myCtrl.setName = function(name){
      myCtrl.name = name
    }
  }
  function secondController(){
    var sCtrl = this
    sCtrl.name = "second controller"
  }

}());
