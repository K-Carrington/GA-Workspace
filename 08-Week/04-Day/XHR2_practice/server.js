var
  ajax = require("./ajax")

/* bad nesting example
ajax({
	method: "GET",
	url: "http://www/google.com",
	params: {},
	success: function(data) {
	  var addToView = data
	  console.log(data)
	  ajax({
	  	method: "GET",
    	url: "http://www.tjs.com",
    	params: {},
	    success: function(data1) {
	      console.log(data1)
          ajax({
	  	    method: "GET",
    	    url: "http://www.facebook.com",
    	    params: {},
	        success: function(data2) {
	          console.log(data2)	
	        }
	    }
	  })
	}
}) 
ajax({
	method: "GET",
	url: "http://www.google.com",
	params: {},
	success: function(data) {
	  var addToView = data
	  console.log(data)
	  ajax({
	  	method: "GET",
    	url: "http://www.tjs.com",
    	params: {},
	    success: function(data1) {
	      console.log(data1)
          ajax({
	  	    method: "GET",
    	    url: "http://www.facebook.com",
    	    params: {},
	        success: function(data2) {
	          console.log(data2)	
	        }
	    })
      }
	  })
	}
}) */

ajax({
	method: "GET",
	url: "http://www.redis.com",
	params: {},
	success: function(data) {
	  console.log(data)
	}
})

