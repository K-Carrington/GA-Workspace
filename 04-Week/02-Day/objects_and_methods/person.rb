class Person
    attr_reader :eye_color # creates default getter

    @@count = 0
	# defaults have to go in the initialize method
	def initialize(namae, sei, menoiro)
	  @@count += 1
	  @name = namae
	  @sex = sei
	  @eye_color = menoiro
    end

    def name=(n) # the = is optional, it designates as a setter
    	             # it enables calling the setter with an = 
    	@name = n
    end

  def get_name_crude
  	"Ore wa " + @name + " da yo!"
  end
  def get_name_polite
  	"Watashi wa " + @name + " to moushimasu"
  end
  def say_name
  	`say ore wa #{@name} da yo! Ruby tsukuta yo!` #Unix command
  end

  def get_sex
  	@sex
  end
  def get_eye_color
  	@eye_color
  end

end

p1 = Person.new("Matsumoto", "M", "green")
p p1.get_name_polite
p2 = Person.new("aaaaa", "M", "blue")
p2.name= 'jimito'
p p2.get_name_polite()
#Dame! p is a predefined method!
#p = Person.new
#p1 = Person.new("Juan", "M", 'blue')

