

class Dog

  #sets up degault setters and getters of the same method names
  attr_accessor :name, :breed, :age
  
  def initialize(name, breed, age)
    @name, @breed, @age = name, breed, age
  end

  def bark
  	puts "My name is #{name}, I'm a #{age} year old #{breed}"
    #`say wan! wan!`
  end
end

d1 = Dog.new("Rover", "Rotweiler", 10)