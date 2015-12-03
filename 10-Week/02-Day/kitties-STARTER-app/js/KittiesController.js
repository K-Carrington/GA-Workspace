angular.module('AdoptionApp')
.controller('KittiesController', KittiesControllerFunc);
function KittiesControllerFunc(){
	var self = this;

    self.removeKitty(name) {
      var kittyIndex = self.kittiesList.indexOf(name);
      self.kittiesList.splice(kittyIndex, 1);
    }

    self.kittiesList = [
		{
			catName: 'Carl',
			monthsOld: 5,
			gender: 'boy',
			image: "images/carl.png",
			adopted: true,
		},
		{
			catName: 'Jack',
			monthsOld: 4,
			gender: 'boy',
			image: "images/jack.png",
			adopted: false
		},
		{
			catName: 'Oscar',
			monthsOld: 2,
			gender: 'boy',
			image: "images/oscar.png",
			adopted: false
		},
		{
			catName: 'Princess Mew',
			monthsOld: 3,
			gender: 'girl',
			image: "images/princessmew.png",
			adopted: false
		}

	]
}