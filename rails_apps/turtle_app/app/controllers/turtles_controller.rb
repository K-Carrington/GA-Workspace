class TurtlesController < ApplicationController
  def index
    @turtles = @@database #database inherited from parent
  end

  def show
  	# params is a rails variable of controller, action & url, 
  	#   id is from created position in the rounds.rb file
  	turtle_id = params[:id].to_i 
  	@turtle  = @@database[turtle_id]
  	puts params #to use for debug, but instead of console can print
  	             # on all paves via application_controller.rb
  end
end
