puts "Enter some words to be counted"
text = gets.chomp
words = text.split(' ')
frequencies = Hash.new(0)
words.each {|word| frequencies[word] += 1}
frequencies = frequencies.sort_by { |word, count| count }
frequencies.reverse!

frequencies.each {|word, count| puts word + " " + count.to_s}



# Variable args
def what_up(greeting, *bros)
  bros.each { |bro| puts "#{greeting}, #{bro}!" }
end
 
what_up("What up", "Justin", "Ben", "Kevin Sorbo")



books = ["Charlie and the Chocolate Factory", "War and Peace", "Utopia", "A Brief History of Time", "A Wrinkle in Time"]

# To sort our books in ascending order, in-place
books.sort! { |firstBook, secondBook| firstBook <=> secondBook }

# Sort your books in descending order, in-place below
books.sort! { |firstBook, secondBook| secondBook <=> firstBook }

# another way:
def alphabetize(arr, rev=false)
    arr.sort!
    if rev
        arr.reverse!
    end
    return arr
end

a = ['abc', 'ced', 'efg', 'bec', 'ddd']
puts alphabetize(a)
puts alphabetize(a, true)


# Hash default values
no_nil_hash = Hash.new("default")

#To convert a string to a symbol
s.to_sym #or:
s.intern

# 4th and 5th ways to create hash mappings
string_AZ = Hash[("a".."z").to_a.zip((1..26).to_a)]
symbol_AZ = Hash[(:a..:z).to_a.zip((1..26).to_a)]

#to see how long something takes to run:
symbol_time = Benchmark.realtime do
  100_000.times { symbol_AZ[:r] }
end

movie_ratings = {
  memento: 3,
  primer: 3.5,
  the_matrix: 5,
  truman_show: 4,
  red_dawn: 1.5,
  skyfall: 4,
  alex_cross: 2,
  uhf: 1,
  lion_king: 3.5
}
good_movies = movie_ratings.select { |k,v| v > 3}

movie_ratings.each_key {|k| puts k }

#To properly store(add/update) in hash:
movies[title.to_sym] = rating.to_i

#To delete from a hash
movies.delete(title.to_sym)

#ternery conditional:
puts true ? "true" : "false"

#One line when stmts:
case greeting
when "English" then puts "Hello!"
when "German" then puts "Guten Tag!"
when "Finnish" then puts "Haloo!"
else puts "I don't know that language!"
end

#conditional assignment, if it's nil
favorite_book ||= "Cat's Cradle"

# upto and downto instead of for loop for #s & chars
"L".upto("P") { |chr| puts chr }
#or n.times
3.times { puts "I'm a refactoring master!" }

#respond_to? method takes a symbol with the same name as a method 
#and sees if the variable type has that method
age.respond_to?(:next)

# << also (besides pushing onto a list) concatenates arrays
caption = "A giraffe surrounded by "
caption << "weezards!" 

# and can use #{an_int} instead of an_int.to_s

# Ruby prime number class
require 'prime'
# The Ruby 1.9 Prime class makes the array automatically!
prime = Prime.instance
prime.first n # changes to the first n prime numbers

#The collect method takes a block and applies the expression in the 
#block to every element in an array. (or collect! to do it to the calling object)
# (The .collect! and .map! methods do the exact same thing.)
doubled_fibs = fibs.collect {|n| n*2}

#You can think of a proc as a "saved" block: just like you can gie a bit of code 
# a name and turn it into a method, you can name a block and turn it into a proc. 
# Procs are great for keeping your code DRY, which stands for Don't Repeat Yourself. 
# With blocks, you have to write your code out each time you need it; with a proc, 
# you write your code once and can use it many times!
# The & is used to convert the proc into a block
multiples_of_3 = Proc.new { |n| n % 3 == 0 }
(1..100).to_a.select(&multiples_of_3) # returns an array with 3, 6, 9, ... 99

round_down = Proc.new {|n| n.floor }
ints = floats.collect(&round_down) # returns array of floored #s

#Proc w/ Yield:
def greeter()
  yield()
end
phrase = Proc.new { puts "Hello there!" }
greeter(&phrase)

# another way to call a proc
hi = Proc.new { puts "Hello!" }
hi.call

# Converting symbols to procs
numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
strings_array = numbers_array.map(&:to_s)

#Lambdas are mostly identical to procs
a_lambda = lambda {...} # is about the same as
a_proc = Proc.new {...}
a_lambda.call
a_proc.call

strings = ["leonardo", "donatello", "raphael", "michaelangelo"]
symbolize = lambda {|str| str.to_sym}
symbols = strings.collect(&symbolize)

#The differences are that a lambda checks the number of arguments passed to it, 
#while a proc does not. This means that a lambda will throw an error if you pass 
#it the wrong number of arguments, whereas a proc will ignore unexpected arguments 
#and assign nil to any that are missing.

#Second, when a lambda returns, it passes control back to the calling method; 
#when a proc returns, it returns out of the calling method.

my_array = ["raindrops", :kettles, "whiskers", :mittens, :packages]
symbol_filter = lambda {|sym| sym.is_a? Symbol }
symbols = my_array.select(&symbol_filter)

odds_n_ends = [:weezard, 42, "Trady Blix", 3, true, 19, 12.345]
ints = odds_n_ends.select {|x| x.is_a? Integer }

ages = [23, 101, 7, 104, 11, 94, 100, 121, 101, 70, 44]
under_100 = Proc.new {|n| n < 100}
youngsters = ages.select(&under_100)

# Looks like .collect .select and .map do the same thing

crew = {
  captain: "Picard",
  first_officer: "Riker",
  lt_cdr: "Data",
  lt: "Worf",
  ensign: "Ro",
  counselor: "Troi",
  chief_engineer: "LaForge",
  doctor: "Crusher"
}
first_half = lambda {|k,v| v < "M"}
a_to_m = crew.select(&first_half)

#Classes:
# $my_var is global also outside of the class
class MyClass
  $my_variable = "Hello!"
end
puts $my_variable

# To return a static via a class function (in class Person):
def self.number_of_instances
  return @@people_count    
end
# and then to read it outside of the class:
puts "Number of Person instances: #{Person.number_of_instances}"

#When you call super from inside a method, that tells Ruby to look in the 
#superclass of the current class and find a method with the same name as 
#the one from which super is called. If it finds it, Ruby will use the 
#superclass' version of the method.
class Message
  @@messages_sent = 0
  def initialize(from, to)
    @from = from
    @to = to
    @@messages_sent += 1
  end
end
class Email < Message
  def initialize(from, to)
    super # think this just calls the base constructor so I could do more before 
          #   or after (?)
  end
end
my_message = Message.new("Alice", "Bob")


class Computer
  @@users = {}
  def initialize(username, password)
    @username = username
    @password = password
    @files = {}
    @@users[username] = password
  end
  def create(filename)
    time = Time.now
    @files[filename] = time
    puts "A new file #{filename} was created with time = #{time}"
  end
  def delete(filename)
      @files.delete(filename)
      puts "num files #{@files.length}"
  end
  def add_to(filename, info)
    temp = @files[filename]
    @files[filename] = temp.to_s + info
    puts @files[filename]
  end
  def Computer.get_users
    return @@users
  end
end
my_computer = Computer.new("Mini Me", "sg332de")
your_computer = Computer.new("Mini You", "dwf2de")
my_computer.create("my_file")
my_computer.create("my_tmp_file")
my_computer.add_to("my_tmp_file", "more info")
my_computer.delete("my_tmp_file")
puts Computer.get_users

#Module (aka namespace) contains related methods and constants (no variables)
require 'a_module' # makes non pre-required ones avalable
include ModuleName # is like using namespace ModuleName in C++, so that the
        # module name no longer needs to be pre-pended with a ::
        # This is called a "mixin"
class Angle
  include Math
  attr_accessor :radians
  def initialize(radians)
    @radians = radians
  end
  def cosine
    cos(@radians)
  end
end
acute = Angle.new(1)
acute.cosine
# and
extend ModuleName #mixes a module's methods at the class level which means that 
    #the class itself can use the methods, as opposed to just instances of the class.


