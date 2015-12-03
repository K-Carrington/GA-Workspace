// This code first refers to the module we just created (called 'app').

// Then, it attaches a controller to it (which we are calling 'MainController').

// The controller takes TWO arguments - the first is the name of the controller, 
// and the second is a function that describes the behaviour of the controller.

// The controller is where we will put most of our code today. 
angular
	.module('app')
    .controller('MainController', MainController);

    function MainController(){
    	var self = this;

        self.imageVisible = true;
        self.toggleImage = toggleImage;
        self.orderProcessAlert = orderProcessAlert;

    	self.person = {
    		name: "John",
            occupation: "Vagabond",
            company: "XXX",
            phone: "123",
            email: "@@@.com",
            color: "lightgray",
            radius: "1",
            image: ""
    	}

        function toggleImage() {
          self.imageVisible = !self.imageVisible;
        }

        function orderProcessAlert() {
          alert("Cards are being processed " + self.person.name);
        }



    	console.log(self)
    	// Here is where you write all the code that 
    	// describes how your controller should work!


    }

