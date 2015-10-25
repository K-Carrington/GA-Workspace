class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

#Mock DB:
  @@database = [
    {
  		name: "Juan",
  		age: "19",
  		speed: 0.002, #kph
  		breed: "TMNT",
  		record: 0
  	},
  	{
  		name: "Ken",
  		age: "10",
  		speed: 15, #kph
  		breed: "Snapping",
  		record: 6
  	},
  	{
  		name: "Tony",
  		age: "28",
  		speed: 11, #kph
  		breed: "Spanish Fly",
  		record: 2
  	},
  	{
  		name: "Crystal",
  		age: "13",
  		speed: 18, #kph
  		breed: "LA Racer",
  		record: 4
  	},
  	{
  		name: "Phillipe",
  		age: "124",
  		speed: 0.001, #kph
  		breed: "OK",
  		record: 0
  	},
  	{
  		name: "Emma",
  		age: "8",
  		speed: 6, #kph
  		breed: "Marauding Snapper",
  		record: 4
  	}
  ]
end

