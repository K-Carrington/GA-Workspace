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



