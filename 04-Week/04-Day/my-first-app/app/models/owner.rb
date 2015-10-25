class Owner
  def initialize
    @first_name = "Napoleon"
    @last_name = "Dynamite"
    @hair_color = "breoud"
    @catch_phrase = "\"Oh Gosh!!\""
  end

  def name
  	@first_name + " " + @last_name
  end

  def hair_color
  	@hair_color
  end

  def catch_phrase
  	@catch_phrase
  end
end