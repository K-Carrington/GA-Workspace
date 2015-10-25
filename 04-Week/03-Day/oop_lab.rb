class Animal
  def is_domestic
    return false
  end 
end

class Bird < Animal
  def fly
  	return "I believe I can"
  end

  def bomb_car
  	return "Haha..."
  end
end

# inherit (sub-class <sub-object would be object in a class>)
class Pidgeon < Bird
	def eat_trash
	  return 'Get me some trash.'
	end
end

class Bald_Eagle < Bird
  #polymorph:
  def bomb_car
  	return "It's pariotic shit..."
  end
end

@pidgeon = Pidgeon.new
@bird = Bird.new
@bald_eagle = Bald_Eagle.new


class Mammal < Animal
  def number_of_nipples
  	return "yes"
  end
  def breath
  	return "Haaaaaa"
  end
end

class Canine < Mammal
  def number_of_nipples
  	return 6
  end
  def licks_face
  	return false
  end
end

class Dog < Canine
  def is_domestic
  	return true
  end
  def licks_face
  	return true
  end
end
class Wolf < Canine

end
@dog = Dog.new
@wolf = Wolf.new

class Feline < Mammal
  def has_stripes
  	return false
  end
end

class Tiger < Feline
  def has_stripes
	return true
  end
end
class Cougar < Feline
end
@tiger = Tiger.new
@cougar = Cougar.new



