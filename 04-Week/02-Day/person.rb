class Person
=begin
  def name
	@name
  end
  def name=(given_name)
	@name=given_name
  end

  def age
  	@age
  end
  def age=(curr_age)
  	@age=curr_age
  end

  def sex
  	@sex
  end
  def sex=(s)
  	@sex=s
  end
=end

  #or helper method:
  attr_accessor :name, :age, :sex # to create getters and setters
  #attr_reader ... to create only getters
  #attr_writer ... to only create setters

  #can initialize with with constructor
  def initialize(name, age, sex="It")
  	@name, @age, @sex = name, age, sex
  end

end