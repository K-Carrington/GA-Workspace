class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # TBD change sources_arr to a hash with source and whether its an
  #  href (and if href, put it in an href in show.html.erb)
  @@database = [ {:subject => "C/C++", :student => "Ken Carrington",
    :sources_arr => ["cppreference.com", "cprogramming.com", 
    	"tutorialspoint.com/cplusplus", "cplusplus.com", "stackoverflow.com"], 
    	:notes => "up through a litte C++14, Kinexa and Elance tests: over 80%"},
    {:subject => "Design Patterns", :student => "Ken Carrington",
      :sources_arr => ["wikibooks.com Programming Design_Patterns",
      	"oodesign.com", "en.wikipedia.org/wiki/Software_design_pattern"], 
      	:notes => "and started reading gang of 4 book"},
    {:subject => "UML", :student => "Ken Carrington",
      :sources_arr => ["Rhapsody Tutorial", "www.uml-diagrams.org",
      	"tutorialspoint.com/uml", "Derek Banas' UML Youtube sets"], 
      	:notes => ""},
    {:subject => "Software Testing", :student => "Ken Carrington",
      :sources_arr => ["accu.org/index.php/journals/1326",
      	"gamesfromwithin.com/exploring-the-c-unit-testing-framework-jungle",
      	"alexott.net/en/cpp/CppTestingIntro.html"], :notes => ""},
    {:subject => "Pthreads", :student => "Ken Carrington",
      :sources_arr => ["computing.llnl.gov/tutorials/pthreads"], 
      :notes => ""}
    #{:subject => "", :student => "Ken Carrington",
    #  :sources_arr => [], :notes => ""},
  ]
end
