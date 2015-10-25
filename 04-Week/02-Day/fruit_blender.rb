

class Blender
  @turned_on = false
  def turn_on
    @turned_on = true
  end

  # take an array of strings and randomly mix
  def mix(arr)
    if @turned_on
      @blender = arr.to_s
      @blender = @blender.split('')
      @blender = @blender.sort_by{ rand }
      @blender = @blender.join('')

      #filter out impurities (the .to_s introduces a lot of chafe)
      @blender = @blender.gsub(/\W+/, '')
      #puts "blender = #{blender}"

      #or: blender = arr.join.split('').shuffle.join
      # instead of above, then don't need to filter
      #return blender
    else
      puts "Please turn blender on"
    end
  end

  def pour
    return @blender
  end
end

fruits = ['apple', 'orange']

my_b = Blender.new
my_b.turn_on
my_b.mix(fruits)
smoothie = my_b.pour
puts "smoothie = #{smoothie}"

class Fruit
  @@fruits = []
  attr_accessor :color, :type
  def initialize(color, type)
    @color, @type = color, type
    @@fruits.push(type)
  end
  def fruits
    @@fruits
  end
end
fruits = []
apple = Fruit.new("red", "apple")
orange = Fruit.new("orange", "orange")
fruits = apple.fruits
my_b.turn_on
my_b.mix(fruits)
smoothie = my_b.pour
puts "smoothie = #{smoothie}"





