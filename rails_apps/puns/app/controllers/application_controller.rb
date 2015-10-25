class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  @@database = [ {:pun => "Suika wa yasuika", :person_responsible => "Ken", :laugh_level => 7},
  	{:pun => "I wasn't originally going to get a brain transplant, but then I changed my mind.",
  	    :person_responsible => "Cholin Thomas", :laugh_level => 4},
  	{:pun => "I'm reading a book about anti-gravity. It's impossible to put down.", 
  	    :person_responsible => "Tori", :laugh_level => 6},
  	{:pun => "New York de, Nyuuyokku suru", :person_responsible => "Ken", :laugh_level => 5},
    {:pun => "What do you say to impatient jockeys? Hold your horses.", 
    	:person_responsible => "Reif", :laugh_level => 4},
    {:pun => "I thought I found evidence to prove the existence of mythical creatures - turned out to be another fairy tail.", 
    	:person_responsible => "Reif", :laugh_level => 7},
    {:pun => "I was asked to be in a theatrical production about puns, it was a play on words",
    	:person_responsible => "Phillipe", :laugh_level => 8}

  ]
end

class Puns 
  def initialize (pun, name, rating)
  	
  end
end
