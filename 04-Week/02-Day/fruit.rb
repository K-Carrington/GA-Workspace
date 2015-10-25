class Fruit
  @@fruit_count = 0
  def initialize
  	@@fruit_count = @@fruit_count + 1;
  end
  def count
  	@@fruit_count
  end

  # getter
  def color
  	#"yellow"
  	@color
  end
  # setter (has equal sign (or question mark if returning boolean))
  def color=(the_name_of_my_color)
    @color = the_name_of_my_color
  end

  #getter
  def type
  	@type
  end
  #setter
  def type=(my_type)
  	@type = my_type
  end

  #getter
  def origin
  	@origin
  end
  #setter
  def origin=(my_origin)
  	@origin = my_origin
  end

  def cost
  	@cost = 0.99
  end

end


