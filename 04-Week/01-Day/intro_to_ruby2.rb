puts "Enter a number"
x = gets # or could use gets.to_i leaving out below to_i
if x.to_i < 10
  puts 'boom'
end

name = "AbCd"
name.downcase! # ! at end applies operation to the variable
puts name


# for loop:
#for d.each do |i| 
#end