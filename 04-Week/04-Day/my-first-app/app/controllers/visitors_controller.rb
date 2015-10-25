class VisitorsController < ApplicationController
	def show
	  #render({plain: "Hello 世界"}) #this bypasses the view
	  
	  Rails.logger.debug("Debuggin.. inside of VisitorsController.show") # instead of puts

	  @website_owner = Owner.new
	  Rails.logger.debug("Debuggin.. owner = " + @website_owner.name) 
    end

    def ken
    	# go to database and do something
    end
end