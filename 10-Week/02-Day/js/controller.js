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
        self.placeOrder = placeOrder;

    	self.person = {
    		name: "Kate",
            occupation: "Web Developer",
            company: "",
            phone: "",
            email: "",
            color: "",
            radius: "",
            image: "http://sanfrancisco.impacthub.net/wp-content/uploads/sites/100/2015/04/GA_logo.png"
    	}

        function toggleImage() {
            self.imageVisible = !self.imageVisible
        }

        function placeOrder() {
            alert("Your cards for " + self.person.name + " are being prepared!")
        }
    	
    	console.log(self)
    	// Here is where you write all the code that 
    	// describes how your controller should work!


    }

